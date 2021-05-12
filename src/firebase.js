   
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

 var firebaseConfig = {
    apiKey: "AIzaSyBNOwe5W2dbOGdSwk4KN9rPo59dFbtnxoc",
    authDomain: "react-crud-95f41.firebaseapp.com",
    databaseURL: "https://react-crud-95f41-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-crud-95f41",
    storageBucket: "react-crud-95f41.appspot.com",
    messagingSenderId: "308314265618",
    appId: "1:308314265618:web:ad99c52e5d53b67e0a60cb"
  };
  // Initialize Firebase
 var fireDb =  firebase.initializeApp(firebaseConfig);


 export default fireDb.database().ref();