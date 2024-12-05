import { auth, signOut } from "./firebase.js"
let currentUser = () => {
    const user = auth.currentUser;

    if (user) {
        alert(user.email)
    } else {
        alert("you are not logged in")
    }
}
let curUser = document.getElementById("curuser")
curUser.addEventListener("click", currentUser)

let logOut = () => {
    signOut(auth).then(() => {
        alert("you're sign out")
    }).catch((error) => {
        alert("error")
    });

}
let logout = document.getElementById("log-out")
logout.addEventListener("click",logOut)