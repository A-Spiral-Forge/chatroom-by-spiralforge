// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAMk7GJ1kxdO41jM7VNTG7bcmEN1PwNVAE',
	authDomain: 'chatroom-8ba42.firebaseapp.com',
	projectId: 'chatroom-8ba42',
	storageBucket: 'chatroom-8ba42.appspot.com',
	messagingSenderId: '939179113992',
	appId: '1:939179113992:web:f4763c613594dbeb0a5bbd',
	measurementId: 'G-VBRJWTJ1LG',
};

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
