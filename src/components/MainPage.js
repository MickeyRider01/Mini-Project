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
    const renderBlog = () => {
        return (
            blogs.map( (blog, index)=> {
               return( 
                    <li key={index}>
                        {blog.id} : {blog.title} : {blog.body}
                    </li>
                )
            } )
        )
    }

    const {blog,setblog} = useState('')

    useEffect(()=>{
        retriveData()
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
        <div>
            <header>
                <h1>Beat Blog</h1>
                <button type="button" onClick={handleLogout}>LogOut</button>
            </header>
            <div className="BlogInput">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Title" 
                            onChange={(e)=>setTitle(e.target.value)}  
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="body" 
                            placeholder="Body"  
                            onChange={(e)=>setBody(e.target.value)}
                            className="form-control"/>
                    </div>
                    <button className="btn btn-primary" onClick={addBlog}>Post</button>
                    <ul>{renderBlog()}</ul>
                </form>
            </div>
        </div>
    )

}

export default MainPage;