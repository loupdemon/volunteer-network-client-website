// import React from 'react';
// import logo from '../../logos/logo.png';

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";
// // Add the Firebase products that you want to use
// import "firebase/auth";
// import firebaseConfig from '../Login/firebase.config';


// const LoginForm = () => {

//     const handleGoogleSignIn = () => {

//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);

//         //Google sign-in provider
//         var provider = new firebase.auth.GoogleAuthProvider();

//         //Authenticate with Firebase using the Google provider object.
//         firebase.auth().signInWithPopup(provider).then(function (result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ...
//         }).catch(function (error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });


//     }

//     return (
//         <div>
//             <h1>This is Login</h1>
//             <button onClick={handleGoogleSignIn}>Google Sign in</button>
//         </div>

//         // <div className="container volunteer-login">
//         //     <a href="/home"><img src={logo} alt="" className="form-logo" /></a>

//         //     <form className="login-form bg-white">
//         //         <div className="form-element">
//         //             <h3>Login with</h3>

//         //             <button onClick={handleGoogleSignIn} className="btn btn-outline-success col-md-12 ">Continue With Google</button>
//         //             <p>Don't have an account? <a href="#">create an account.</a></p>
//         //         </div>
//         //     </form>

//         // </div>
//     );
// };

// export default LoginForm;