import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 


const Login=()=>{
    //Call the useHistory hook to get the history object
    const history = useHistory();
    const [credentials, setCredentials]=useState({username:"",password:""})

    const handleChange=e=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        }) 

    }

    const handleSubmit=e=>{
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
             .then(res=>{
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                 history.push('/friends')
             })
             .catch(err=>{
                console.log(err)
             })


    }
    return (<div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
               {/* 'htmlFor' in JSX equals to 'for' in JS,means to the 'id' of the form */}
                <label htmlFor="username">Username:</label>
                <input id='username' name="username" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type='password' id='password' name='password' onChange={handleChange} />
            </div>
            <button>Submit</button>
        </form>
    </div>

    )
}

export default Login;