import React from 'react';
import './Books.css';

export default () => {
    return(
        
        <div className='LoginPage-Container'>
            <h1>Welcome To Book Store</h1>
            <div className='SigninContainer' align="center">
                <h2>Please Login</h2>
                <input className='input' type="text"/><br/>
                <input className='input' type="text"/>
                <div className='btnContainer'>
                    <button className='btn' /*onClick={()=>....}*/>Sign in</button>
                    <button className='btn' /*onClick={()=>....}*/>Sign up</button>
                </div>
            </div>
            
        </div>
    )
}