import { auth } from "./firebase.js"
let login = document.getElementById("login")
login.addEventListener("click", () => {
    window.location.href = "./login.html"
})

let signup = document.getElementById("signup")
signup.addEventListener("click", () => {
    window.location.href = "./signup.html"
})
