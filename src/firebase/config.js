// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKXMUuzUo9IjMzEhK4Dtj0VBNE2RTJOCE",
  authDomain: "sneakers-shop-d1228.firebaseapp.com",
  projectId: "sneakers-shop-d1228",
  storageBucket: "sneakers-shop-d1228.appspot.com",
  messagingSenderId: "761345217217",
  appId: "1:761345217217:web:34185a644ab5db1eef3a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);