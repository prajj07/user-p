import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firestore } from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa9ELchyaf7I1SS2626YXlVufBEooNRR0",
  authDomain: "social-bf7d1.firebaseapp.com",
  projectId: "social-bf7d1",
  storageBucket: "social-bf7d1.appspot.com",
  messagingSenderId: "541126959017",
  appId: "1:541126959017:web:5572c17c7127e80ce3eeb8",
  measurementId: "G-E5468849FQ"
};

const fetchData = async () => {
  try {
    const snapshot = await firestore.collection("yourCollection").get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
 