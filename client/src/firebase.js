// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "nobility-a243a.firebaseapp.com",
    projectId: "nobility-a243a",
    storageBucket: "nobility-a243a.appspot.com",
    messagingSenderId: "646795456298",
    appId: "1:646795456298:web:39912dc4148d2c549c7853"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);