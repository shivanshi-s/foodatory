import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAtMToTAq2BR9GQbgnw3YiRKa3A6RLXoI8",
   authDomain: "foodatory-b6b7a.firebaseapp.com",
   projectId: "foodatory-b6b7a",
   storageBucket: "foodatory-b6b7a.appspot.com",
   messagingSenderId: "180780015773",
   appId: "1:180780015773:web:eb6c66bee69d1ab4353474"
 };

//  init firebase
firebase.initializeApp(firebaseConfig)
// init services
const projectFirestore = firebase.firestore()

// export 
export { projectFirestore }