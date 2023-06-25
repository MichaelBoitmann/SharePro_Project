import React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
// import dotenv from 'dotenv';
// import { GoogleLoginButton } from 'react-google-button'
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/elex_test.mp4';
import logo from '../assets/sharepro.png';

import { client } from '../client.jsx';

// dotenv.config();

const Login = () => {
  const navigate = useNavigate();

  const [ user, setUser ] = useState({});

  // const handleCallbackResponse = (response) => {
  //   localStorage.setItem('user', JSON.stringify(response.profileObj));
  //   const { name, googleId, imageUrl } = response.profileObj;
  //   const doc = {
  //     _id: googleId,
  //     _type: 'user',
  //     userName: name,
  //     image: imageUrl,
  //   };

  const handleCallbackResponse = (response) => {
    if (response && response.profileObj) {
      const { name, googleId, imageUrl } = response.profileObj;
  
      localStorage.setItem('user', JSON.stringify(response.profileObj));
  
      const doc = {
        _id: googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
      };
      client.createIfNotExists(doc).then(() => {
        navigate('/', { replace: true })
      });
  
    } else {
      // Handle the case when `response.profileObj` is undefined or doesn't exist
      console.log('Error: Missing profile information');
      // You can display an error message, redirect the user, or take any other appropriate action
      // For example:
      // setError('Error: Missing profile information');
      // history.push('/login');

    }

    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("GoogleSignInDiv").hidden = true;
  };

  const handleSignOut = () => {
    setUser();
    document.getElementById("GoogleSignInDiv").hidden = false;
  }

  // google will be called from index.html script before the title
  useEffect(() => {

    // function that will include the google account client link instead
    // of running it from index.html
    const initializeGoogleSignIn = async () => {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    
      google.accounts.id.initialize({      
        client_id: "545827459244-qaeo79atr6a8si971h8imbqnbja46dmd.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("GoogleSignInDiv"),
        { theme: "outline", size: "large"}
      );      
    };

      initializeGoogleSignIn();
      // google.accounts.id.prompt();
  }, []);


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video 
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay text-orange-100 text-xl">          
          <div className="p-5">
            <img className="rounded-lg" src={logo} width="230px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <div id="GoogleSignInDiv">
              { Object.keys(user).length != 0 &&          
                <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
              }

              { user && 
                <div className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none text-black">
                  <img className="rounded-lg" src={user.picture}></img>
                  <h3 className="pl-2 pr-3">{user.name}</h3>
                </div>
              }
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Login;
