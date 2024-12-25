// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuBqh6k7pBDwrUDN307MUus1JaDJzAIzk",
  authDomain: "visit-asia.firebaseapp.com",
  projectId: "visit-asia",
  storageBucket: "visit-asia.firebasestorage.app",
  messagingSenderId: "77433845182",
  appId: "1:77433845182:web:d1b33c3c46e2e0d4bb75ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;