import React, { createContext, useContext, useEffect, useState } from 'react'
import  axios from "axios"
import { useNavigate } from "react-router-dom";
import "./Register.css"
import Navbar from "../Components/Navbar"
import { Link } from 'react-router-dom';


export const Register = ()=>{
    const baseURL = process.env.REACT_APP_BACKEND_URL


    const navigateTo = useNavigate()
    const [fields,setValue] = useState({name:"John",username:"John@gmail,com",pass:"John Doe",balance:0})
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    const [pass,setPass] = useState("")

    const getValue = (e)=>{
        e.preventDefault()
        var id = e.target.name
        var value = e.target.value
        console.log(id ,":", e.target.value)
        setValue((prev)=>{
            return{...prev,[id]:value}
        })
        console.log(fields.name)
        console.log(fields)
    }

    const submitForm = async (event)=>{
        event.preventDefault()

        var data = {
            "name" : fields.name,
            "username" : fields.username,
            "password" : fields.pass,
            "amount" : fields.balance
        }
        console.log(data)
        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: 'cors'

        };
        const  res = await fetch(`${baseURL}/user`,option)
        console.log(res)
        navigateTo("/")

    }




    return(
            <div className='container'>
<div className="register-container">

    <div className="register-text">REGISTER</div>
    <div className="register-box">
        <div className="image-display-box">
            <img src="https://i.pinimg.com/564x/88/b8/bb/88b8bb8183ba4e674a058a470a227aee.jpg" alt="" className="city-img" />
        </div>
        <div className="register-input">
            <h1 className='greetings-register'>Create New Account Here !</h1>
            <input type="text" name = "name" placeholder='Name' className='input-register'  onChange={getValue}/>
            <input type="text" name = "username" placeholder='Username' className='input-register' onChange={getValue}/>
            <input type="text" name = "pass" placeholder='Password'className='input-register' onChange={getValue}/>
            <input type="number" name = "balance" placeholder='Balance'className='input-register' onChange={getValue}/>
            <div className="button-act">
                <a className='direct-link submit-btn button-submit' onClick={submitForm}>SUBMIT</a>
                <a href='/' className='direct-link back-btn back-button-19'>Back</a>
            </div>
        </div>
        
    </div>
</div>




            </div>




    )

}

export const x = 0

