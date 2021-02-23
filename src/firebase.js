import firebase from "firebase" ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Paste your API key and other configurations from the firebase in the empty string area of the firebaseConfig accordingly 
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "
    "
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebaseApp.firestore() ;

  const auth = firebase.auth() ;

  const provider = new firebase.auth.GoogleAuthProvider() ;

  export {db , auth , provider} ;
