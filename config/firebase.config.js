// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzctNRxOFpm7Il8l6DWTNpN4yHiz7nLLI",
  authDomain: "capstone-userauth.firebaseapp.com",
  projectId: "capstone-userauth",
  storageBucket: "capstone-userauth.appspot.com",
  messagingSenderId: "95551688035",
  appId: "1:95551688035:web:4896542a3aa7befab55756",
  measurementId: "G-FGZ7X7912L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;