import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "./axiosWithAuth";

const Logout=()=>{
    const history=useHistory()
    useEffect(()=>{
        axiosWithAuth().post("http://localhost:9000/api/logout")
            .then(res=>{
                localStorage.removeItem('token')
                history.push('/login')
            })
            .catch(err=>{
                console.log(err)
            })

    },[])
    return (<div>
        Logging out... Please wait.
    </div>)
}

export default Logout;