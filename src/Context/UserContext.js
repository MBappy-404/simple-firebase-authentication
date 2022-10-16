import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/FirebaseConfig';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app)



const UserContext = ({children}) => {
 const [user, setUser] = useState({});
 const [loading, setLoading] = useState(true);
 const googleProvider = new GoogleAuthProvider();

 const createUser = (emil, password) =>{
   return createUserWithEmailAndPassword(auth, emil, password);

 };

 const signIn =(email,password)=>{

  return signInWithEmailAndPassword(auth,email, password);
 };

 const signInWIthGoogle = () =>{
   return signInWithPopup(auth,googleProvider);
 }

 const logOut = () =>{
   signOut(auth)

 }

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUsr =>{

      setUser(currentUsr);
      setLoading(false)
   })

   return ()=>{
      unsubscribe();
   }
 },[])
     const authInfo = {user,createUser, signIn, logOut,signInWIthGoogle,loading };
     return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
     );
};

export default UserContext;