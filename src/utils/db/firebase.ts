// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8y5_DEfdA-hDOzYtACVBYEFqkrIVO0iI",
  authDomain: "overheard-550df.firebaseapp.com",
  projectId: "overheard-550df",
  storageBucket: "overheard-550df.appspot.com",
  messagingSenderId: "1079375170456",
  appId: "1:1079375170456:web:47e7168b76963ec736b9ed",
  measurementId: "G-Z8Z1Z3QZJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
