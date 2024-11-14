import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

//----------------------------------Sign_Up--------------------------------------------
let sign_up = document.getElementById("signup")
sign_up.addEventListener("click", () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("You are Signed-Up")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage);
        });
})

//---------------------------------------------Sign_In---------------------------------
let signIn = () => {
    let email = document.getElementById("login_email").value
    let password = document.getElementById("login_password").value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("You are Signed_In")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}
let sign_in = document.getElementById("sign_in")
sign_in.addEventListener("click", signIn)

//--------------------------------------Give  Location To Dashboard--------------------------
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        window.location.href = "./dashboard.html"
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
    } else {
      alert("You're not Signed In")
    }
  });