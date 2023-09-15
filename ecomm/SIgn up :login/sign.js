import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

const firebaseConfig = {
	apiKey: "AIzaSyA0ElyJrRAzPHjizthv7AD2Mk7pbbHwKA8",
	authDomain: "login-with-firebase-data-e7605.firebaseapp.com",
	projectId: "login-with-firebase-data-e7605",
	storageBucket: "login-with-firebase-data-e7605.appspot.com",
	messagingSenderId: "777684821453",
	appId: "1:777684821453:web:117879a8f0f78335e99084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

var email = document.getElementById('email')
var password = document.getElementById('password')
var name = document.getElementById('name')

window.signup = function(e){
	e.preventDefault();
	var obj = {
		name : name.value,
		email : email.value,
		password : password.value
	}

	createUserWithEmailAndPassword(auth,obj.email,obj.password)
	.then(function(success){
		alert("SignUp Succesfully")
	)}
	.catch(function(err){
		alert("error" + err)
	})

	console.log(obj)
};
