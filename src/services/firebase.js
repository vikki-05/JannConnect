// Firebase core
import { initializeApp } from "firebase/app";

// Firestore
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBScXfqCjgrP6d-dNK40ulbM1_C3xI2TuY",
  authDomain: "jannconnect-753d3.firebaseapp.com",
  projectId: "jannconnect-753d3",
  storageBucket: "jannconnect-753d3.firebasestorage.app",
  messagingSenderId: "269554492943",
  appId: "1:269554492943:web:a61156ab5f6b937440257a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore database
export { db };
