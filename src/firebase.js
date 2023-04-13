import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBad1QuPVbZaK60j2UDNxGYu_0dHye6Umg",
  authDomain: "linkedin-clone-3d3ff.firebaseapp.com",
  projectId: "linkedin-clone-3d3ff",
  storageBucket: "linkedin-clone-3d3ff.appspot.com",
  messagingSenderId: "242088976476",
  appId: "1:242088976476:web:0c664c8ad714f2edc04699",
  measurementId: "G-LRJR151G7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
