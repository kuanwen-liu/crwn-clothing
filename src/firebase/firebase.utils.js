import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDQEpT5Xl1Kr8bMy9FDtBHxcTubU7GeJDE",
  authDomain: "crwn-db-fc4bd.firebaseapp.com",
  projectId: "crwn-db-fc4bd",
  storageBucket: "crwn-db-fc4bd.appspot.com",
  messagingSenderId: "1041922893714",
  appId: "1:1041922893714:web:3ad4b54eac8b3ee968434b",
  measurementId: "G-7GBHW5LHNM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
