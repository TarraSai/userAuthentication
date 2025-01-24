// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "bolgwebsite-5278a.firebaseapp.com",
  projectId: "bolgwebsite-5278a",
  storageBucket: "bolgwebsite-5278a.firebasestorage.app",
  messagingSenderId: "968822611388",
  appId: "1:968822611388:web:19be032e82989b70b15fb9",
  measurementId: "G-1FTQKSPWTW",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

