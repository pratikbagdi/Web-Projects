// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtf1PPCzkioyviANo3-aDsXQUC0267UE",
  authDomain: "vite-contact-f9c96.firebaseapp.com",
  projectId: "vite-contact-f9c96",
  storageBucket: "vite-contact-f9c96.firebasestorage.app",
  messagingSenderId: "432425464467",
  appId: "1:432425464467:web:8939db783e71157e7ed366"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);