import React ,{ useState } from 'react';
import './Books.css';
import auth from './firebase';
import MainPage from './MainPage';
import { useHistory, NavLink, Link } from 'react-router-dom';
import 'react-router-dom';
import 'react-dom';
import {Button} from "reactstrap";



const SignIn = ({setSession}) => {
    //const history = useHistory();
    
      
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () =>{
        try {
            const response = await auth.signInWithEmailAndPassword(
                username, 
                password);

            const { user } = response;
            setSession({
                isLoggedIn: true,
                currentUser: user
            });
        }catch (error){
            setSession({
                isLoggedIn: false,
                currentUser: null,
                errorMessage: error.message
            });
        }
    }
    const handleSignup = async () =>{
        try {
            const response = await auth.createUserWithEmailAndPassword(
                username, 
                password);

            const { user } = response;

            setSession({
                isLoggedIn: true,
                currentUser: user
            });
        }catch (error){
            setSession({
                isLoggedIn: false,
                currentUser: null,
                errorMessage: error.message
            });
        }
    }
    const handleUsername = e =>{
        setUsername(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
   
    
    return(
        
        <div className='LoginPage-Container' align="center">
            <h1 className="welcome-message">Welcome to Blue Blog</h1>
            <div className='SigninContainer' align="center">
                <h2 className="text-login">Please SignIn or SignUp</h2>
                <div className="signin-con">
                    <input className='input' type="email" placeholder="Email" onChange={handleUsername}/><br/>
                    <input className='input' type="password" placeholder="Password" onChange={handlePassword}/>
                    <div className='btnContainer'>
                        <button className='btn' onClick={handleLogin} >Sign in</button>
                        <button  className='btn' onClick = {handleSignup} >Sign Up</button>
                    </div>
                </div>
                <p className='credit' align="center">This Website Created by : Mikael Yapa </p>
                <p className='credit' align="center">Student id : 5935512082 </p>
            </div>
            
        </div>
    )
}
export default SignIn