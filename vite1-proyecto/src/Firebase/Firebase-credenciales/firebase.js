
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// Importamos Firestore
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: "prueba-crud-cd0e1.firebaseapp.com",
  projectId: "prueba-crud-cd0e1",
  storageBucket: "prueba-crud-cd0e1.appspot.com",
  messagingSenderId: "504430978247",
  appId: "1:504430978247:web:92609d2f6b384405fc4ae2",
  measurementId: "G-KPDRH6DT5C"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db}