import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCEon-_VUs2VVbPDEO98RrCECrv1BMKAw4",
  authDomain: "e-comerce-7b25f.firebaseapp.com",
  projectId: "e-comerce-7b25f",
  storageBucket: "e-comerce-7b25f.appspot.com",
  messagingSenderId: "247019454158",
  appId: "1:247019454158:web:2dbd70d3d937d71852da9f",
  measurementId: "G-WEQKS2W8NT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;