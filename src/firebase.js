import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhL0oWD9Ix6IfLmQ7qg3NK5M1R74Oy9rE",
    authDomain: "chat-65468.firebaseapp.com",
    projectId: "chat-65468",
    storageBucket: "chat-65468.appspot.com",
    messagingSenderId: "518308469555",
    appId: "1:518308469555:web:8050b3efa91d1641b2fc46",
    measurementId: "G-VQ5LHWVDJJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()