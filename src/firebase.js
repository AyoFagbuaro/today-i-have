import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0dmF-dPBDyP8b7mNSpivoiaqt3pN6tTQ",
  authDomain: "today-i-have-441dc.firebaseapp.com",
  projectId: "today-i-have-441dc",
  storageBucket: "today-i-have-441dc.appspot.com",
  messagingSenderId: "383060081135",
  appId: "1:383060081135:web:298337da8ccdbfdce49e1a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
