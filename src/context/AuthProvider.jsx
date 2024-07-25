import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const auth = getAuth();

// create user
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
// create user using gmail
const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

// login
const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// logout
const logout = () => {
    return signOut(auth);
}


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout
    }


    // user is available or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider