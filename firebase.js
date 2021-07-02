import { FilterBAndWSharp } from '@material-ui/icons';
import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWyOZdI5K7Q36H3PXiRGbVlp5XtnBlR1M",
    authDomain: "opot-whatsaap.firebaseapp.com",
    projectId: "opot-whatsaap",
    storageBucket: "opot-whatsaap.appspot.com",
    messagingSenderId: "823731400696",
    appId: "1:823731400696:web:2a1f2e1ffda66f0a6db00d",
    measurementId: "G-WM0TK1Q2YT"
  };

  const app = !firebase.apps.length ? 
      firebase.initializeApp(firebaseConfig) : 
          firebase.app();


const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };