import React, { useState, useEffect } from 'react';
import Login from './loginpage';
import auth from '../index';


const Action = () => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);
 

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <div>
      {session.isLoggedIn ? (
        <div>
          <center>
          <span>
            <h1>Welcome  {session.currentUser && session.currentUser.displayName}</h1>
            {session.currentUser && session.currentUser.email}
            <br/>
            <img
               width="180px" height="150px"
              src={session.currentUser && session.currentUser.photoURL}
            />
          </span>
          
            <br/>
           
            <button  
               
                onClick={handleLogout}>logout</button>
          <h1>Welcome to Schedule Anime</h1>
          
          </center>
        </div>

      ) : (
          <div>
          <Login setSession={setSession} />
          
           </div>
        )}

    </div>
  )
}
export default Action