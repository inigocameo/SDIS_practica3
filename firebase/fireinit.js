// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBzc_SVBafk2zxqO_GDvd6LliuPVTaje8",
  authDomain: "sdispractica3.firebaseapp.com",
  projectId: "sdispractica3",
  storageBucket: "sdispractica3.appspot.com",
  messagingSenderId: "318099124954",
  appId: "1:318099124954:web:7d93f29ba7b321dfe8abe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export function getDB(){return db}