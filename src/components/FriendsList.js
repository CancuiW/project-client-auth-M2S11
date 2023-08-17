import React from "react";
import { useState ,useEffect} from "react";
import axiosWithAuth from './axiosWithAuth'
const FriendList = () => {
    const [getData,setGetData]=useState([])
   useEffect(()=>{
       axiosWithAuth().get("http://localhost:9000/api/friends")
                      .then(res=>{
                        //console.log(res.data)
                        setGetData(res.data)
                      })
                      .catch(err=>{
                        console.log(err)
                      })

   },[])
   //solution2:
    // useEffect(() => {
    //     const token=localStorage.getItem('token')
    //     axios.get("http://localhost:9000/api/friends",{
    //         headers:{
    //             authorization:token
    //         }
    //     })
    //         .then(res => {
    //             //console.log(res.data)
    //             setGetData(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }, [])

   

    return (<>
        <h2>FriendList</h2>
        <ul>
            {getData.map(item => (
                <li key={item.id}>{`-${item.name}-${item.email}`}</li>
            ))}
        </ul>   
        
    </>)
}

export default FriendList;