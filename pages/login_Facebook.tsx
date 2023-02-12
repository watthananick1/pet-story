import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import firebase from "../firebase/clientApp";
import { FacebookAuthProvider } from "firebase/auth";
const LoginPage: React.FC = () => {
  //const firebase = useFirebaseApp();
  const [error, setError] = useState("");

  const handleLoginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const userCredential = await firebase.auth().signInWithPopup(provider);
      console.log("User signed in with Facebook:", userCredential.user.email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <button onClick={handleLoginWithFacebook}>Login with Facebook</button>
    </div>
  );
};

export default LoginPage;
