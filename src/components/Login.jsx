import React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLoginButton } from 'react-google-button'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';


const Login = () => {

  const [ user, setUser ] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }


  const handleSignOut = (event) => {
    setUser();
    document.getElementById("signInDiv").hidden = false;
  }

  // google will be called from index.html script before the title
  useEffect(() => {
    
    google.accounts.id.initialize({      
      client_id: "545827459244-qaeo79atr6a8si971h8imbqnbja46dmd.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

    google.accounts.id.prompt();
  }, []);

  // const responseGoogle=(response) => {
  //   localStorage.setItem('user', JSON.stringify(response.profileObj));

  //   const { name, googleId, imageUrl } = response.profileObj;

  //   const doc = {
  //     _id: googleId,
  //     _type: 'user',
  //     userName: name,
  //     image: imageUrl,
  //   }
  // }

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
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div >
            <div id="signInDiv"></div>
            {  Object.keys(user).length != 0 &&
              <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }
            <br />
            <br />

            { user && 
              <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
              </div>
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login
