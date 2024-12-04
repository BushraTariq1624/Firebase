import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js"

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.addEventListener("click ",() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.addEventListener("click",() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.addEventListener("click ", () => {
    signupBtn.click();
    return false;
});


let signUp = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("you are signed_in")
            console.log(user);

        })
        .catch((error) => {
            alert("you are not signed_in")
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error.message);

        });
}
let sign_up = document.getElementById("signingup")
sign_up.addEventListener("click", signUp)

let signIn = () => {
    let email = document.getElementById("lgemail").value
    let password = document.getElementById("lgpassword").value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("you are logged_in")
            console.log(user);
            window.location.href = "./dashboard.html"
        })
        .catch((error) => {
            alert("yoy are not logged_in")
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(error.message);

        });
}
let login= document.getElementById("login_button")
login.addEventListener("click", signIn)