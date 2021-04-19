import * as firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwtsiEeFN_pxTsRqPirfaI0LM_gUPWlZ8",
  authDomain: "bedtime-stories-c7126.firebaseapp.com",
  databaseURL: "https://bedtime-stories-c7126-default-rtdb.firebaseio.com",
  projectId: "bedtime-stories-c7126",
  storageBucket: "bedtime-stories-c7126.appspot.com",
  messagingSenderId: "752400187484",
  appId: "1:752400187484:web:d09a67badb3548506ca699",
};
// Initialize Firebase

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default firebase.firestore();
