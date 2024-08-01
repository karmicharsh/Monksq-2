 // Your web app's Firebase configuration

const { transformWithEsbuild } = require("vite");

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZKJt15Wishz25HUbAOZTdGmp43OuYlh4",
    authDomain: "login-with-database-27eb9.firebaseapp.com",
    projectId: "login-with-database-27eb9",
    storageBucket: "login-with-database-27eb9.appspot.com",
    messagingSenderId: "822906006813",
    appId: "1:822906006813:web:c58eb54d489fd2a10905f4",
    measurementId: "G-WK6HMH0QEH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

  function register(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('text').value
  }
  // Function for the animation 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
if(validateEmail(email) == false || validatePassword(password) == false){
  alert('Email or password is incorrect')
  return
}
if(validateField(full_name) == false){
  alert('One or more given credentials are incorrect')
}

  // Move on with Auth
auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
function validateEmail(email){
  expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(expression.test(email) == true){
    return true
  }else{
    return false
  }
}
  function validatePassword(password){
    if(password < 6){
      return false
    }else{
      return true
    }
  }
  function vaidateField(field){
    if(field == null){
      return false
    }
    if(field.length <= 0){
      return false
    }else{
      return true
    }
  }

  
