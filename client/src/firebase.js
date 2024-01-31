// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "estate-8da95.firebaseapp.com",
  projectId: "estate-8da95",
  storageBucket: "estate-8da95.appspot.com",
  messagingSenderId: "1026075193894",
  appId: "1:1026075193894:web:7b30d29baa9ebfa4a3ace7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);