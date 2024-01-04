// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_t-rg_0JnanTe_JW8pwFQOJxi1uNTv7M",
  authDomain: "realtor-clone-react-e1113.firebaseapp.com",
  projectId: "realtor-clone-react-e1113",
  storageBucket: "realtor-clone-react-e1113.appspot.com",
  messagingSenderId: "673477243548",
  appId: "1:673477243548:web:2d18a79530e1abf9c17359",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
