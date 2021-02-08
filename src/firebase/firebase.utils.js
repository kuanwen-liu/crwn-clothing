import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxyvRYfQTX5gCAvjviq7oik58yZEOIhDI",
    authDomain: "crwn-db-16947.firebaseapp.com",
    projectId: "crwn-db-16947",
    storageBucket: "crwn-db-16947.appspot.com",
    messagingSenderId: "703090534804",
    appId: "1:703090534804:web:255c1950aa446f6e694781",
    measurementId: "G-C7DPD7QYCF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;