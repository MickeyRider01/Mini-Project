import React, {useState, useEffect} from 'react';
import './MainPage.css'
import auth from './firebase';
import {firestore} from './firebase/index'
const MainPage = ({setSession}) =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [blogs, setBlogs] = useState([
        /*{id:1, title:'test',body:'just test'}*/
    ]);
    //const [comments, setComments] = useState([]);
    //const [comment, setComment] = useState('');
    const renderBlog = () => {
        return (
            blogs.map( (blog, index)=> {
                
               return( 
                    <li key={index}>
                        #{blog.id} : 
                        <h2>{blog.title}</h2> 
                        <a className="body-container">{blog.body}</a>
                        
                    </li>
                )
            } )
        )
    }


    //const {blog,setblog} = useState('')

    useEffect(()=>{
        retriveData();
    },[])
    

    const retriveData = () => {
        firestore.collection('blogs').onSnapshot((snapshot)=>{
           let myblog = snapshot.docs.map(d=>{
                console.log('d:', d.data())
                const{id,title,body} = d.data()
                return {id,title,body}
            })
            setBlogs(myblog)
        })
    }
 

    const addBlog = () => {
        let id = blogs[blogs.length-1].id+1
        firestore.collection('blogs').doc(id+'').set({id,title,body})
    }
    
    const handleLogout = () => {
        auth.signOut().then(response =>{
            setSession({
                isLoggedIn: false,
                currentUser: null
            });
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        const post = {
            title: title,
            body: body
        }
        //auth.push(post);
        //setPassword(e.target.value)
    }
    
    return(
        <div className="MainPageStyle">
            
            <div align="right">
                <button className="btn-Logout" type="button" onClick={handleLogout} >LogOut</button>
            </div>
            <h1 className="head">Beat Blog</h1>
            <div className="BlogInput" >
                <form onSubmit={handleSubmit}>
                    <div className="post-container">
                        <div className="form-group" align="center">
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Title" 
                                onChange={(e)=>setTitle(e.target.value)}  
                                //className="form-control"
                                className="blogTitle"/>
                        </div>
                        <div className="form-group" align="center">
                            <textarea 
                                type="text" 
                                name="body" 
                                placeholder="Body"  
                                onChange={(e)=>setBody(e.target.value)}
                                //className="form-control"
                                className="blogBody"/>
                        </div>
                        <div align="center">
                            <button className="btn-post" onClick={addBlog} >Post</button>
                        </div>
                    </div>
                    <ul>{renderBlog()}</ul>
                </form>
            </div>
        </div>
    )

}

export default MainPage;