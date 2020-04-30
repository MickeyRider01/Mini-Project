import React ,{useState, useEffect} from 'react';
import SignIn from './components/SignIn'
import MainPage from './components/MainPage'
import './App.css'
import auth from './components/firebase';
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom';
//import { BrowserRouter, Switch, Route } from "react-router-dom";



const App = () =>{
  /*const [session,setSession] = useState({
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
  }*/
  return(
      /*<div>
        {
          session.isLoggedIn ? (<MainPage setSession={setSession}/>) : (<SignIn setSession={setSession}/>)
        }
      
      </div>*/
      <div>
      <Router>
        <Route path="/mainpage" exact component={MainPage} />
        <Route path="/signin" exact component={SignIn}/>
      </Router>
      

      
        <MainPage />
      </div>
  )
}
export default App;
