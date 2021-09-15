// Import the functions you need from the SDKs you need

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCrXSONCbJdJOWph-I337eiFApsXaIGlQ",
  authDomain: "disney-clone-17aad.firebaseapp.com",
  projectId: "disney-clone-17aad",
  storageBucket: "disney-clone-17aad.appspot.com",
  messagingSenderId: "333914532344",
  appId: "1:333914532344:web:5202d83642805503884e0d",
  measurementId: "G-4ZEJMCZPJE",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
