// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const API_KEY = import.meta.env.MY_API_Key

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "photo-album-4581c.firebaseapp.com",
  projectId: "photo-album-4581c",
  storageBucket: "photo-album-4581c.appspot.com",
  messagingSenderId: "464140402652",
  appId: "1:464140402652:web:9bb83ac06ade87bd8d5919",
  measurementId: "G-H3GWDHY312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);