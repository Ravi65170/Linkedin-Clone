// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIOtlhOm6x498nnuiGhqy6STzAHjZH_zQ",
  authDomain: "linkdin-clone-1c191.firebaseapp.com",
  projectId: "linkdin-clone-1c191",
  storageBucket: "linkdin-clone-1c191.appspot.com",
  messagingSenderId: "432224754329",
  appId: "1:432224754329:web:e9d3f0f6fee91b6d80b608",
  measurementId: "G-5367R8D04T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };
