// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvaVKukz89qUkfoEC089OTodnskRxib4M",
  authDomain: "ema-jhon-withfirebase-auth.firebaseapp.com",
  projectId: "ema-jhon-withfirebase-auth",
  storageBucket: "ema-jhon-withfirebase-auth.appspot.com",
  messagingSenderId: "768279261717",
  appId: "1:768279261717:web:c93d9f1e90ee64fd31541c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;