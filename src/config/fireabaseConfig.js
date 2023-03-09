// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjlPWE0GainT5BMret_lCiaECesqpctIE",
    authDomain: "login-322.firebaseapp.com",
    projectId: "login-322",
    storageBucket: "login-322.appspot.com",
    messagingSenderId: "555330133031",
    appId: "1:555330133031:web:7d08d2c341d90f63a98202",
    measurementId: "G-ZHZD452HXF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;