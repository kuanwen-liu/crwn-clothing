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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
