import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCSNzOFAX8v55E9O_sLDIjImDz7eDJgxyI",
  authDomain: "photowall-b973d.firebaseapp.com",
  databaseURL: "https://photowall-b973d.firebaseio.com",
  projectId: "photowall-b973d",
  storageBucket: "photowall-b973d.appspot.com",
  messagingSenderId: "511854293281"
};
firebase.initializeApp(config);

const database = firebase.database();

export { database };
