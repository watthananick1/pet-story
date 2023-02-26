import React, { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signInWithPopup,
signOut, 
getAuth} from "firebase/auth";
import {app} from "../firebase/clientApp";


const auth = getAuth(app);
interface UserType {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    console.log(1);
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const logInGoogle = (provider:any) => {
    console.log(2);
    return signInWithPopup(auth, provider);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logInGoogle, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};