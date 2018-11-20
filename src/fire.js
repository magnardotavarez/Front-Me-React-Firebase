import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdOhMJ0C23J4UMdoFqengFZKsj0j2kjKY",
  authDomain: "front-me.firebaseapp.com",
  databaseURL: "https://front-me.firebaseio.com",
  projectId: "front-me",
  storageBucket: "",
  messagingSenderId: "794588074672"
};
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default fire;
