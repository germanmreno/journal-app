import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
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
