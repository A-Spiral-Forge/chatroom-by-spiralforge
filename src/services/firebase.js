// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp,
	onSnapshot,
	query,
	orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loginWithGoogle() {
	try {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();

		const { user } = await signInWithPopup(auth, provider);

		return { uid: user.uid, displayName: user.displayName };
	} catch (error) {
		if (error.code !== 'auth/cancelled-popup-request') {
			console.error(error);
		}

		return null;
	}
}

async function sendMessage(roomId, user, text) {
	try {
		await addDoc(collection(db, 'room', roomId, 'messages'), {
			uid: user.uid,
			displayName: user.displayName,
			text: text.trim(),
			timestamp: serverTimestamp(),
		});
	} catch (error) {
		console.error(error);
	}
}

function getMessages(roomId, callback) {
	return onSnapshot(
		query(
			collection(db, 'room', roomId, 'messages'),
			orderBy('timestamp', 'asc')
		),
		(querySnapshot) => {
			const messages = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			callback(messages);
		}
	);
}

export { loginWithGoogle, sendMessage, getMessages };
