import React, { createContext, useContext, useEffect, useId, useRef, useState } from 'react'
import axios from "axios"
import { FaUserCircle } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import "./Profile.css"
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { getUser } from '../utils/user';  

export const Profile = ()=>{
    
 

    
    const navigateTo = useNavigate()

    const [link_image,setLink  ]= useState("https://i.pinimg.com/236x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg")
    const [fields, fillFields] = useState({name:"",username:"",balance:"",link_image:""}) 


    const baseURL = process.env.BACKEND_URL

    const handleChange = (e)=>{
        const id = e.target.name
        const value= e.target.value
        fillFields((prev)=>{
            return{...prev,[id]:value}
        })

    }

    const submitChanges =async (e)=>{
        e.preventDefault()
        const userData = await getUser()
        const userID = userData.id
        var data = {
            name: fields.name,
            username : fields.username,
            amount:fields.balance,
            image:fields.link_image
        }
        console.log(data)
        const option = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: 'cors'
    
        };
        const  res = await fetch(`${baseURL}/user-profile/${userID}`,option)
        console.log(res)
        window.localStorage.setItem("USER",JSON.stringify(userData));

        
        navigateTo("/home")

    }

   
  
    useEffect(()=>{
        async function recentData(){
            const users = await getUser()
            console.log(users)
            const id = 
            fillFields((prev)=>{
                return{...prev,name:users.name,username:users.username, balance:users.amount,link_image:"https://i.pinimg.com/236x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg"}
            })
        

        }
        recentData()
    },[])

    return(
        <div className="profile-container">
            <div className="picture-profile-container">
                <img src={link_image} alt="" className="user-profile" />
            </div>
            <div className="user-identity-input">
                <label htmlFor="name" className="name-label">Name</label>
                <input type="text" onChange={handleChange} className="name-input" placeholder='Name' value={fields.name} name='name' />
                <label htmlFor="" className="username-label">Username</label>
                <input type="text" onChange={handleChange} className="username-input" placeholder='Username' value={fields.username} name='username'/>
                <label htmlFor="balance" className="balance-label">Balance</label>
                <input type="Number" onChange={handleChange} className="balance-input" placeholder='balance' value={fields.balance} name='balance' min="0" oninput="if(this.value<0){this.value= this.value * -1}"/>
                <label htmlFor="User Profile Image" className="link-user-profile-label" >User Profile Link</label>
               
                <input type="text" onChange={handleChange} className="link-user-profil-input" placeholder='Image Link' value={fields.link_image} name='link_image' />
            </div>
            <div className="submit-btn-profile">
            <button onClick={submitChanges} className='btn-submit-profile'> Submit
          
            </button>
            </div>
        </div>
    )


    
}