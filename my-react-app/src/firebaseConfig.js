// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLIGisomz0d85I8PFLHpsc0rQNRdLdXUk",
  authDomain: "nibmtestapp-ff077.firebaseapp.com",
  projectId: "nibmtestapp-ff077",
  storageBucket: "nibmtestapp-ff077.appspot.com",
  messagingSenderId: "568234395719",
  appId: "1:568234395719:web:6e6c1d6824933698dac962",
  measurementId: "G-6WSJFRDD2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);