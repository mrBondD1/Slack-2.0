// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcEbhzzC9cP2GrSuuZxOpPIZYyGk0m25o",
  authDomain: "slack-clone-ecf56.firebaseapp.com",
  projectId: "slack-clone-ecf56",
  storageBucket: "slack-clone-ecf56.appspot.com",
  messagingSenderId: "415841083996",
  appId: "1:415841083996:web:eab14bbafb4cd8f77cbc99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
