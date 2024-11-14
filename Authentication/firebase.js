import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCxwQBwJTzn5sQi98f-jW4bOHvzdnoXy1I",
    authDomain: "bushraproject-5b223.firebaseapp.com",
    projectId: "bushraproject-5b223",
    storageBucket: "bushraproject-5b223.firebasestorage.app",
    messagingSenderId: "213120765889",
    appId: "1:213120765889:web:4a4a9c58a655801db02940"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);