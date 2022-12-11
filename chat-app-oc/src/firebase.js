import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCL9s65lnzSYshX-GbnrSqUhpGYGRHuvuU",
    authDomain: "chat-3f0f2.firebaseapp.com",
    projectId: "chat-3f0f2",
    storageBucket: "chat-3f0f2.appspot.com",
    messagingSenderId: "864262375581",
    appId: "1:864262375581:web:a69e3f3a877c6969d46c74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
