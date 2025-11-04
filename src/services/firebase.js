// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDVtEF5I2DeoU1L9Aw91jj6yg5H5DjcsA",
  authDomain: "yeneskill.firebaseapp.com",
  projectId: "yeneskill",
  storageBucket: "yeneskill.firebasestorage.app",
  messagingSenderId: "992851396296",
  appId: "1:992851396296:web:22976117fceaa1326a87fd",
  measurementId: "G-78K0ZL5QHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);