// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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

export { loginWithGoogle };
