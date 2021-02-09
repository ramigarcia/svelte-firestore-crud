import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCVBiB9XL9FJSapVOSB3FuqZWmNqsYFHBk",
  authDomain: "svelte-crud-e23c3.firebaseapp.com",
  projectId: "svelte-crud-e23c3",
  storageBucket: "svelte-crud-e23c3.appspot.com",
  messagingSenderId: "157944923942",
  appId: "1:157944923942:web:4056c1e34504486d7ca3e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();