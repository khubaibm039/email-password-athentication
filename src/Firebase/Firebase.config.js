// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDMcKDe9NA1vY4vaK5moAUomLng3ATa64",
    authDomain: "user-email-password-auth-93868.firebaseapp.com",
    projectId: "user-email-password-auth-93868",
    storageBucket: "user-email-password-auth-93868.appspot.com",
    messagingSenderId: "1071564972158",
    appId: "1:1071564972158:web:efc8f04638a5116b1a382f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
