import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signin} from './SignIn-SignUpAction'
import './Books.css';
import {Redirect} from 'react-router-dom'
import MainPage from './MainPage'
import { render } from '@testing-library/react';
import auth from './firebase';
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const SignInPage = ({ setSession }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = async () => {
        try {
          const response = await auth.signInWithEmailAndPassword(
            username,
            password
          );
          
          const { user } = response;
    
          setSession({
            isLoggedIn: true,
            currentUser: user
          });
        } catch (error) {
          setSession({
            isLoggedIn: false,
            currentUser: null,
            errorMessage: error.message
          });
        }
      };

    const handleRegister = async () => {
        try {
          const response = await auth.createUserWithEmailAndPassword(
            username,
            password
          );
    
          const { user } = response;
    
          setSession({
            isLoggedIn: true,
            currentUser: user
          });
        } catch (error) {
          setSession({
            isLoggedIn: false,
            currentUser: null,
            errorMessage: error.essage
          });
        }
      };
      const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }
    
        /*const {authError,auth}=this.props;
        if (auth.uid) return <Redirect to='./Mainpage'/>;*/
      return(
            <div className='LoginPage-Container'>
                <form /*onSubmit={this.handleSubmit} className="boxSignin"*/>
                    <h1>Welcome To Beat Blog</h1>
                    <div className='SigninContainer' align="center">
                        <h2>Please Login</h2>
                        <input className='input' type="email"  onChange={(e)=>setUsername(e.target.value)} /> <br/>
                        <input className='input' type="password" onChange={(e)=>setPassword(e.target.value)} />
                        <div className='btnContainer'>
                            <div>
                                <button className='btn' onClick={handleLogin}>Sign in</button>
                                    <div className="red-text center">
                                        uiConfig={uiConfig}
                                        firebaseAuth={firebase.auth()}
                                    </div>
                            </div>
                            <button className='btn' onClick= {handleRegister}>Sign up</button>
                        </div>
                    </div>
                </form>
                

            </div>
      );
    
}

/*const mapStateToProps = state => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        signin: creds => dispatch(signin(creds))
    };
};*/

export default SignInPage;