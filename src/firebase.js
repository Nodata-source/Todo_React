// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQPOlEN0oBzW29Mx29uH5-0IeGT6cwY4",
  authDomain: "camera-application-2a9c0.firebaseapp.com",
  projectId: "camera-application-2a9c0",
  storageBucket: "camera-application-2a9c0.firebasestorage.app",
  messagingSenderId: "292019683579",
  appId: "1:292019683579:web:81e1949548d1433ded705e",
  measurementId: "G-5JHSLH1QJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);