import React ,{ useState } from 'react';
import './Books.css';
import auth from './firebase';
import MainPage from './MainPage';



const SignIn = ({setSession}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () =>{
        try {
            const response = await auth.signInWithEmailAndPassword(username, password);
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
        
        <div className='LoginPage-Container'>
            <h1>Welcome to Beat Blog</h1>
            <div className='SigninContainer' align="center">
                <h2>Please Login</h2>
                <input className='input' type="email" placeholder="Email" onChange={handleUsername}/><br/>
                <input className='input' type="password" placeholder="Password" onChange={handlePassword}/>
                <div className='btnContainer'>
                    <button className='btn' onClick={handleLogin} >Sign in</button>
                </div>
            </div>
            
        </div>
    )
}
export default SignIn