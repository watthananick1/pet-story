import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { useAuth } from "../Context/Authcontext";
import { useRouter } from 'next/router'



const LoginPage: React.FC = () => {
  const router = useRouter();
  const {logInGoogle} = useAuth();
  //var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //const firebase = useFirebaseApp();
  
  const [error, setError] = useState("");

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await logInGoogle(provider);
      console.log("User signed in with Google:", userCredential.user.email);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLoginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const userFacebook = await logInGoogle(provider);
      userFacebook.then((result) => {
        // The signed-in user info.
        const user = result.user;
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      });
      console.log("User signed in with Facebook:", userFacebook.user.email);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <div>
        <Button onClick={handleLoginWithGoogle}>Login with Google</Button>
      </div>
      <br/>
      <div>
      {error && <div>{error}</div>}
      <Button onClick={handleLoginWithFacebook}>Login with Facebook</Button>
    </div>
    </div>
  );
};

export default LoginPage;