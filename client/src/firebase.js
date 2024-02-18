// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-424e0.firebaseapp.com",
  projectId: "blog-424e0",
  storageBucket: "blog-424e0.appspot.com",
  messagingSenderId: "173092328209",
  appId: "1:173092328209:web:2f88276b826f6688d132b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);