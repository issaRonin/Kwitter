
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTwO11l1krCFNMrVSmo5J3nroAaGsSC0w",
  authDomain: "kwitter-d80b2.firebaseapp.com",
  databaseURL: "https://kwitter-d80b2-default-rtdb.firebaseio.com",
  projectId: "kwitter-d80b2",
  storageBucket: "kwitter-d80b2.appspot.com",
  messagingSenderId: "95152027287",
  appId: "1:95152027287:web:90b5d4303a282ff2171bd2"
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
