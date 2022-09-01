
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage'
import "firebase/auth"
import "firebase/firebase-functions"

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXHSW9Cx_e8l2b31RseD0fPQQjVZDSTps",
    authDomain: "kwik-tempt.firebaseapp.com",
    projectId: "kwik-tempt",
    storageBucket: "kwik-tempt.appspot.com",
    messagingSenderId: "780312197644",
    appId: "1:780312197644:web:8149df68f695f99d104c29"
});

export const auth = FirebaseApp.auth()
export const database = FirebaseApp.firestore();
const storage = firebase.storage()
const functions = firebase.functions()

export  {
  storage, functions, FirebaseApp as default
}