import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCb1TFQ7-OOuckg6CLJcpXF-rNrGPLTNUw",
    authDomain: "clone-2befd.firebaseapp.com",
    projectId: "clone-2befd",
    storageBucket: "clone-2befd.appspot.com",
    messagingSenderId: "1069970829246",
    appId: "1:1069970829246:web:43b672a54bd728b64e53ef",
    measurementId: "G-RQKJTX0NBH"
});

const auth = firebase.auth();

export { auth };