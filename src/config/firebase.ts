// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider}from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZR0EUztNwSoL0fvjdj3sXzWmnTJTOmvY",
  authDomain: "react-media-3b591.firebaseapp.com",
  projectId: "react-media-3b591",
  storageBucket: "react-media-3b591.appspot.com",
  messagingSenderId: "640659323459",
  appId: "1:640659323459:web:8d88a247f2f9d01eccf2f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export   const auth = getAuth(app) ;
 export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);