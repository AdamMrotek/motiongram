// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjhxHz1adV99PK1KLC_fzjhkpwz0bfGCk",
  authDomain: "framer-gram.firebaseapp.com",
  projectId: "framer-gram",
  storageBucket: "framer-gram.appspot.com",
  messagingSenderId: "324719082828",
  appId: "1:324719082828:web:e9e6b75d13e094875ba3e9"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);


// Initialize Cloud Firestore and get a reference to the service
const projectFirestore = getFirestore(app);
export { projectFirestore, projectStorage };
