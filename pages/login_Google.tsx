import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import firebase from "../firebase/clientApp";
import { GoogleAuthProvider } from "firebase/auth";
const LoginPage: React.FC = () => {
  //const firebase = useFirebaseApp();
  const [error, setError] = useState("");

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await firebase.auth().signInWithPopup(provider);
      console.log("User signed in with Google:", userCredential.user.email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
