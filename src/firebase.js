// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe-YRZFJNdv16bEqzLWr-6UrUFoo7Gh8Y",
  authDomain: "pokeapi-9c9d5.firebaseapp.com",
  projectId: "pokeapi-9c9d5",
  storageBucket: "pokeapi-9c9d5.appspot.com",
  messagingSenderId: "1023751587734",
  appId: "1:1023751587734:web:97cb9904b028404c6f7fb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}