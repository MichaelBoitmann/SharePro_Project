import React from 'react';
import { useEffect } from 'react';
import { GoogleLoginButton } from 'react-google-button'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';


const Login = () => {

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  // 'google' will be called from index.html script before the title
  useEffect(() => {
    
    google.accounts.id.initialize({      
      client_id: "545827459244-qaeo79atr6a8si971h8imbqnbja46dmd.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

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
      <div className="relative w-ful h-full">
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
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <div id="signInDiv"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
