// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByVbumseD_izDSBFt3a_fA0zFqVOqroW4",
  authDomain: "cprg306-assignments-c3a29.firebaseapp.com",
  projectId: "cprg306-assignments-c3a29",
  storageBucket: "cprg306-assignments-c3a29.firebasestorage.app",
  messagingSenderId: "722791947612",
  appId: "1:722791947612:web:6bae8b369dbd492e0cb599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);