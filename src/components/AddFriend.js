import React ,{useState}from "react";
import { useHistory} from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";

const AddFriend = () => {
    const [form,setForm]=useState({name:"",email:""})
    const history = useHistory();
    const handleChange=e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })

    }
    console.log(form)
    const handleSubmit=e=>{
        e.preventDefault()
        axiosWithAuth().post('http://localhost:9000/api/friends',form)
             .then(res=>{
                //console.log(res.data)
                 history.push('/friends')
             })
             .catch(err=>{
                console.log(err)

             })


    }

    return (<>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Username:</label>
                <input id='name' name="name" onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input id='email' name='email' onChange={handleChange} />
            </div>
            <button>Submit</button>
        </form>
    </>)
}

export default AddFriend;