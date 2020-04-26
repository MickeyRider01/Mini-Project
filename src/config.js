import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    // Your web app's Firebase configuration
  
    apiKey: "AIzaSyA9uMJwYKFEuxIwauj3InGWaFV-05Cugqc",
    authDomain: "miniproject-314bc.firebaseapp.com",
    databaseURL: "https://miniproject-314bc.firebaseio.com",
    projectId: "miniproject-314bc",
    storageBucket: "miniproject-314bc.appspot.com",
    messagingSenderId: "809416144110",
    appId: "1:809416144110:web:691fd9d4726506a42a2fff",
    measurementId: "G-SE93ZBGE4W"
  
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots:true});

export default config