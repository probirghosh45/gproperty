import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../Firebase/Auth.Firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const SignInWithGit=(provider)=>{
    return signInWithPopup(auth, provider)
  }

  const updateUser = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile);
  };


  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  const authInfo = {
    user,
    createUserWithEmail,
    signInWithEmail,
    signOutUser,
    signInWithGoogle,
    updateUser,
    loading,
    SignInWithGit
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
