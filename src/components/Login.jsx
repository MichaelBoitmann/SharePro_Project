import React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/elex_test.mp4';
import logo from '../assets/sharepro.png';

import { client } from '../client.jsx';

const Login = () => {
  const [ user, setUser ] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("GoogleSignInDiv").hidden = true;
  };

  function handleSignOut(event) {
    setUser({});
    document.getElementById("GoogleSignInDiv").hidden = false;
  }

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  useEffect(() => {
    // const initializeGoogleSignIn = async () => {
    //   await new Promise((resolve, reject) => {
    //     const script = document.createElement('script');
    //     script.src = 'https://accounts.google.com/gsi/client';
    //     script.async = true;
    //     script.onload = resolve;
    //     script.onerror = reject;
    //     document.body.appendChild(script);
    //   });    
    //   initializeGoogleSignIn();
    // };

      google.accounts.id.initialize({      
      client_id: "545827459244-qaeo79atr6a8si971h8imbqnbja46dmd.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("GoogleSignInDiv"),
      { theme: "filled_blue", size: "large"}
    );   
    
    google.accounts.id.prompt();
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
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">          
          <div className="p-5">
            <img src={logo} width="150px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <div id="GoogleSignInDiv"></div>
            {Object.keys(user).length != 0 && 
              <div>
                <button
                  type="button" 
                  className="bg-mainColor cursor-pointer flex items-center justify-top p-3 rounded-lg outline-none"
                  onClick={(e) => handleSignOut(e)}
                >Sign Out</button> 
                <img className="rounded-lg" src={ user.picture } alt="google user id"/>
                <h3 className="pl-2 pr-3">{ user.name }</h3>
              </div>         
            }
         
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Login;
