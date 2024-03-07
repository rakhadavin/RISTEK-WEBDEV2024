import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./Record.css"
import { Description, RepeatOnOutlined } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { setUserLogin } from '../Redux/Slice';
import { getUser } from '../utils/user';
import {Toaster,toast} from 'react-hot-toast'



const Record = ()=>{
    
const [input,setValue] = useState({desc:"",category:"income",amount:0, date:""})
const [category, setCategory] = useState("all")
const {user} = useSelector((state)=>state)
const baseURL = process.env.REACT_APP_BACKEND_URL

const  navigateTo = useNavigate()

const inputHandler = async (e)=>{
   
    
    var id =   e.target.name
    var value = e.target.value
    if(id === "date"){
        value = value.split("-")
        console.log(value)
        value = `${value[0]}-${value[1]}-${value[2]}`
        console.log(value)
    }
    console.log(`${id}:${value}`)
    setValue((prev)=>{
       return{...prev ,[id]:value} 
    })
}


const submitHandler = async ()=>{
    const userData = await getUser()
    const userID = userData.id
    var data = {

        description:input.desc,
        category : input.category,
        amount : input.amount,
        date : input.date,
        user_id : userID
    }

    
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        mode: 'cors'

    };
    const update_amount_opt = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id : userID,
            amount : input.amount,
            category : input.category
        }),
        mode: 'cors'

    };
    const  res = await fetch(`${baseURL}/user-record`,option)
  
    const  res2 = await fetch(`${baseURL}/update-amount/${userID}`,update_amount_opt)


    toast.success('Successfully Created New Record!' )
    navigateTo("/home")
}




    return(
<div className="record-container">
    <div className="record-text">ADD RECORD</div>
    <div className="record-input-box">
        <div className="record-input">
            <div className="desc-box">
                <input type="text" className="description-item" color='white' name='desc' placeholder='Record Description' onChange={inputHandler}/>
            </div>
            <div className="data-record" >
                <div className="category">
                    <div></div>
                    <select name="category" id="category" className='category-item' onChange={inputHandler}>
                        <option className='dropdown-menu'  value="prefix" disabled>Choose Your Record's Type --</option>
                        <option className='dropdown-menu'  value="Income" onChange={inputHandler}>Income</option>
                        <option className='dropdown-menu' value="Outcome" onChange={inputHandler}>Outcome</option>
                    </select>
                    
                </div>
                <div className="amount-box">
                    <div></div>
                    <input type="Number" name="amount" className="input-record amount" color='white' placeholder='Amount' min="0" oninput="if(this.value<0){this.value= this.value * -1}" onChange={inputHandler}/>
                </div>
                <div className="date-picker">
                    <label htmlFor="date" className='label-date'>Record Date</label>
                    <input type="date" id="date" name="date" className="input-record date" color='white' placeholder='Date' onChange={inputHandler}/>
                </div>
            </div>
            <div className="button-record">
           <a href="/home" className='addRecord-btn direct-link button-19'  >Cancel</a>
            <button className='addRecord-btn button-20' onClick={submitHandler}>SUBMIT</button>

  


            </div>
           
        </div>
    </div>
</div>
    )
}
export default Record;