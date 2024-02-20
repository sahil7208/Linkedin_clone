import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { enableLogging } from 'firebase/database';
// import firebase from "firebase";
import 'firebase/firestore'; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyBtU575lnHHeIbQisJ0zIz1jJDBBxvMRIc",
  authDomain: "linkedin-95005.firebaseapp.com",
  projectId: "linkedin-95005",
  storageBucket: "linkedin-95005.appspot.com",
  messagingSenderId: "968735371506",
  appId: "1:968735371506:web:debe47649a774f657be06b",
  measurementId: "G-SE2NCBC3LC"
};
enableLogging(true);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, googleProvider,storage,db};
//export default db;