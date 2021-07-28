import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA42XyPLoK7UNgbiDOyP9DcK8xkV3sAlAQ",
  authDomain: "imessage-clone-65355.firebaseapp.com",
  databaseURL: "https://imessage-clone-65355.firebaseio.com",
  projectId: "imessage-clone-65355",
  storageBucket: "imessage-clone-65355.appspot.com",
  messagingSenderId: "480567276665",
  appId: "1:480567276665:web:3d90658585434a77fb50a8",
  measurementId: "G-LCZ30C4NCW",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
