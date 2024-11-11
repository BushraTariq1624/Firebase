import { auth, createUserWithEmailAndPassword} from "./firebase.mjs"
let signUp = ()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  console.log(email);
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode);
      console.log(errorMessage);
    });
}
let sign_up = document.getElementById("sign_up")
sign_up.addEventListener("click", signUp)