import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMWrW6JNh05maBWa-pQ-8Qs0W0Ppjtm-s",
    authDomain: "todo-app-9c1aa.firebaseapp.com",
    projectId: "todo-app-9c1aa",
    storageBucket: "todo-app-9c1aa.appspot.com",
    messagingSenderId: "980061827679",
    appId: "1:980061827679:web:fb6bdbf054dc21258a21ea",
    measurementId: "G-T0JQWR46KY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// db.settings({ timestampsInSnapshots: true });

export default db;