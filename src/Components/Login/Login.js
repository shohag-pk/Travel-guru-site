import React, { useContext, useState } from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import Logo2 from "../../images/Logo2.png";
import facebookIcon from "../../images/Icon/fb.png";
import googleIcon from "../../images/Icon/google.png";
import Navber from "../Navber/Navber";
import { DestinationContext } from "../../App";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSingOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';


function Login() {
    const [newUser, SetNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    })

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(DestinationContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
      }
    
      const singOut = () => {
        handleSingOut()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
        })
      }
    
      const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
    
      }
    



const handleBlur = (e) =>{

    let isFieldValid = true;
    if(e.target.name === 'email'){
       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if(e.target.name === 'password'){
      
      const isPasswordValid = e.target.value.length > 6;
      const number = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && number;

    }
     if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
     }
  }


  const handleSubmit = (e) => {
    //console.log(user.email, user.password);
   
     if(newUser && user.email && user.password){
 
       createUserWithEmailAndPassword(user.name, user.email, user.password)
       .then(res => {
         setUser(res);
         setLoggedInUser(res);
         history.replace(from);
       })
 
     
     }
 
     if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
       setUser(res);
       setLoggedInUser(res);
       history.replace(from);
     })
 
      
     }
 
     e.preventDefault();
   }







  return (
    <div>
      <Navber color="black" image={Logo2} />

      <br/>
      <br/>

     

      <form onSubmit={handleSubmit} style={{textAlign: 'center'}} >
        
      {
        user.isSignedIn ? <button onClick={singOut}>Sign Out</button>: <button />
        
      }

        <div className="form-group">
        <input type="checkbox" onChange={() => SetNewUser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser">New User Sign up</label>
        
        { newUser && <input type="text" name="name" onBlur={handleBlur}  placeholder=" Name" required/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur}  placeholder=" Your Email Address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder=" Your Email Password"  id="" required/>
        <br/>

        <input type="submit" value={newUser ? 'sign up ' : 'sign in'}/>
        

    <p style={{color:'red'}}>{user.error}</p>
    {
      user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Logged In'} Successfully</p>
    }
            

            </div>
          
      </form>

      <div style={{ width: "300px", margin: "auto" }}>
        <p className="text-center">Or</p>

        <div
          onClick={fbSignIn}
          style={{ cursor: "pointer", borderRadius: "50px" }}
          className="d-flex border ml-2"
        >
          <img
            className="mt-2 ml-1"
            style={{ width: "30px", height: "30px" }}
            src={facebookIcon}
            alt=""
          />
          <p className="ml-4 mt-2">Continue with Facebook</p>
        </div>
        <div
          onClick={googleSignIn}
          style={{ cursor: "pointer", borderRadius: "50px" }}
          className="d-flex border ml-2 mt-3"
        >
          <img
            className="mt-2 ml-1"
            style={{ width: "30px", height: "30px" }}
            src={googleIcon}
            alt=""
          />
          <p className="ml-4 mt-2">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;