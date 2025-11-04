// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDvETF51DeoU1L9Aw91jj6ygH5DjcSA",
  authDomain: "yeneskill.firebaseapp.com",
  projectId: "yeneskill",
  storageBucket: "yeneskill.appspot.com",
  messagingSenderId: "992851396296",
  appId: "1:992851396296:web:22976117fceaa1326a87fd",
  measurementId: "G-78K0ZLS9HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
