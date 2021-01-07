import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4I5wSiubOhe02b6Lz_iqd1XEsdp1HuEY",
    authDomain: "journal-app-39b13.firebaseapp.com",
    projectId: "journal-app-39b13",
    storageBucket: "journal-app-39b13.appspot.com",
    messagingSenderId: "990923508541",
    appId: "1:990923508541:web:a984db7f0f91751d059354",
};

// const firebaseConfigTesting = {
//     apiKey: 'AIzaSyC2x-tAhXzSrcQ4hv6aoQwylxg-bJVg9lY',
//     authDomain: 'journal-app-testing-b0baf.firebaseapp.com',
//     projectId: 'journal-app-testing-b0baf',
//     storageBucket: 'journal-app-testing-b0baf.appspot.com',
//     messagingSenderId: '432716162015',
//     appId: '1:432716162015:web:79466fdc4cc74be54b1a6a',
// };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
