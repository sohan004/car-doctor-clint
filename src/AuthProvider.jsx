import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './firebase.config';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [load, setLoad] = useState(true)
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const sign = (email, pass) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const logIn = (email, pass) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const out = () => {
        localStorage.removeItem('user-token')
        setLoad(true)
        return signOut(auth)
    }
    const token = (u) => {
        const er = {
            email: u.email
        }
        return fetch('https://car-doctor-server-beige-tau.vercel.app/jwt', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(er)
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoad(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const info = {
        sign,
        user,
        out,
        logIn,
        load,
        token
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;