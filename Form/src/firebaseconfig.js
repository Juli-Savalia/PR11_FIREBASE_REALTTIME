import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkodHehOO9spmfnXkTlmnORtdvX3j4JgE",
  authDomain: "studentcrud3382.firebaseapp.com",
  databaseURL: "https://studentcrud3382-default-rtdb.firebaseio.com",
  projectId: "studentcrud3382",
  storageBucket: "studentcrud3382.appspot.com",
  messagingSenderId: "842203359701",
  appId: "1:842203359701:web:864f6e541bcdee5f7d755c",
  measurementId: "G-CTED4LQ3NE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
