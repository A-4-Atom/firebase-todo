// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8-7bbYpRFGD31BCcT7gRFlrxBRmHwfDE",
  authDomain: "fir-todo-f892b.firebaseapp.com",
  projectId: "fir-todo-f892b",
  storageBucket: "fir-todo-f892b.appspot.com",
  messagingSenderId: "851491687479",
  appId: "1:851491687479:web:d03f1eb772a81e411483b2",
  measurementId: "G-EWWVXJEWWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
