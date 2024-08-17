import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAm_jA6vJIFCog9RVmUkIdE_4LtfEBH2c",
  authDomain: "foodie-19ea6.firebaseapp.com",
  databaseURL: "https://foodie-19ea6-default-rtdb.firebaseio.com",
  projectId: "foodie-19ea6",
  storageBucket: "foodie-19ea6.appspot.com",
  messagingSenderId: "904063538844",
  appId: "1:904063538844:web:2e6d4ab090dd0b2c1fbf59"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
