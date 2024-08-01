 // Your web app's Firebase configuration
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