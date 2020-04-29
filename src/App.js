import React ,{useState, useEffect} from 'react';
import SignIn from './components/SignIn'
import MainPage from './components/MainPage'
import SignUp from './components/SignUpPage'
import './App.css'
import Loginpage from './components/loginpage';
import auth from './components/firebase';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from './components/SignUpPage';



const App = () =>{
  const [session,setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });
  useEffect(() =>{
    const handleAuth = auth.onAuthStateChanged(user=>{
      if(user){
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        })
      }
    });
    return ()=>{
      handleAuth()
    }
  })
  if (session.isLoggedIn){
  }
  return(

      <div>
        {
          session.isLoggedIn ? (<MainPage setSession={setSession}/>) : (<SignIn setSession={setSession}/>)
        }
        
      </div>
      

  )
  
}

export default App;
