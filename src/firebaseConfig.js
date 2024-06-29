// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAESIm_RM5-5JLH0jbczwo4SEtDo1sNqBA",
  authDomain: "hhhh-9bf1d.firebaseapp.com",
  projectId: "hhhh-9bf1d",
  storageBucket: "hhhh-9bf1d.appspot.com",
  messagingSenderId: "835664127481",
  appId: "1:835664127481:web:68b1c6de1d68f173e84928",
  measurementId: "G-YZ9DNTKSJ8"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const database = firebase.database();
const timestamp = firebase.database.ServerValue.TIMESTAMP;

export { firebase, storage, database, timestamp };
