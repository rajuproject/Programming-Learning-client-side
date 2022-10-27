import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from './firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const authInfoo = createContext()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider()
    // google login 

    const githubProvider  = new GithubAuthProvider()

    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update name 
    const updateName = name => {
        console.log(name)
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
      }

    //   Login with password 
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // email verify 
    const verifyEmail = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }

      //7. Forget Password
  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

    // Log out 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           

            // if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { 
        user, 
        loading, 
        setLoading,
        signInWithGoogle, 
        logOut, 
        updateUserProfile,
        verifyEmail,
        createUser, 
        signIn,
        resetPassword,
        updateName,
        githubSignIn 
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;