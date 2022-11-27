import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCUMthMKmV2WCA7SEsg7vHLz_jCcxxnIyg",
    authDomain: "ciclista-eletronico-6bc1c.firebaseapp.com",
    projectId: "ciclista-eletronico-6bc1c",
    storageBucket: "ciclista-eletronico-6bc1c.appspot.com",
    messagingSenderId: "13813161968",
    appId: "1:13813161968:web:4b5658f2d4583ccc984735",
    measurementId: "G-R2PP3NMKY5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
