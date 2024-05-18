// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyBO3seEe7v7ntYPs7JibNJAQXiV0GsYics",
  authDomain: "adv-example-53832.firebaseapp.com",
  projectId: "adv-example-53832",
  storageBucket: "adv-example-53832.appspot.com",
  messagingSenderId: "999107099255",
  appId: "1:999107099255:web:150f7eb803279c3ebbe472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
