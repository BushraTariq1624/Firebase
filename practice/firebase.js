import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAkcsO4be2SHoBnGknFojb_ML1A6rQLLfE",
    authDomain: "practice-588c4.firebaseapp.com",
    projectId: "practice-588c4",
    storageBucket: "practice-588c4.firebasestorage.app",
    messagingSenderId: "280391313729",
    appId: "1:280391313729:web:d7d4a0efe2ceeb988659c0",
    measurementId: "G-87PFYBCVJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}