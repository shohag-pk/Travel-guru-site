import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const initializeLoginFramework = () => {

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(googleProvider).then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
        

      }
      return signedInUser;

    })
    .catch(err =>{
      console.log(err);
      console.log(err.message);
    })
  }

  export const handleFbSignIn = () => {
    const fbPovider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbPovider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      user.success = true;
      return user;

     
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  
  export const handleSingOut =() =>{
   return firebase.auth().signOut().then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
        error:'',
        success: false

      }
      return signedOutUser;
    }).catch(err => {
      // An error happened.
    });

  }

  export const createUserWithEmailAndPassword = (name,email,password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
       return newUserInfo;
        
      })
      .catch(error => {
        // Handle Errors here.
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
        
        
        // ...
      });
  }

  export const signInWithEmailAndPassword = (email, password) => {
     return firebase.auth().signInWithEmailAndPassword(email, password)
      
    .then( res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
      
    })
    .catch(error => {
      // Handle Errors here.
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
       return newUserInfo ;
      
      
      // ...
    });
    
  }

  const updateUserName = name =>{
      const user = firebase.auth().currentUser;

      user.updateProfile({
          displayName: name
      }).then(function(){
          console.log('user name updated successfully')

      }).catch(function(error){
          console.log(error)
      })
  }