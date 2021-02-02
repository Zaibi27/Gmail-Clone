import firebase from "firebase" ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrQ8AGP9cqUJywIYE7AbPWLkQCVVu4Gxw",
    authDomain: "clone-1b173.firebaseapp.com",
    projectId: "clone-1b173",
    storageBucket: "clone-1b173.appspot.com",
    messagingSenderId: "909196505781",
    appId: "1:909196505781:web:c19c41e1eb33e2964d44fc",
    measurementId: "G-6Z786TM005"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebaseApp.firestore() ;

  const auth = firebase.auth() ;

  const provider = new firebase.auth.GoogleAuthProvider() ;

  export {db , auth , provider} ;