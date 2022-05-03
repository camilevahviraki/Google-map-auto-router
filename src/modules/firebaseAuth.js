// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7SJCO7hgu9PJfWjs_QakQUmOpxqBXpRs",
  authDomain: "camilux-vitron-auth-1.firebaseapp.com",
  projectId: "camilux-vitron-auth-1",
  storageBucket: "camilux-vitron-auth-1.appspot.com",
  messagingSenderId: "243687971275",
  appId: "1:243687971275:web:7cc73a544c83691ae93e4e",
  measurementId: "G-Z7916JNHSL"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appFirebase);