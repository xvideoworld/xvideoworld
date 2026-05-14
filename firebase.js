import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function(){
let email=document.getElementById('email').value;
let pass=document.getElementById('pass').value;

signInWithEmailAndPassword(auth,email,pass)
.then(()=>alert("Login Success"))
.catch(err=>alert(err.message));
  }
