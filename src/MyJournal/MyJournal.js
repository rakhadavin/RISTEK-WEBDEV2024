import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import axios from "axios"
import { FaUserCircle } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import "./MyJournal.css"
import {useSelector,useDispatch} from 'react-redux';
import { getUser } from '../utils/user'; 
import { Link } from 'react-router-dom';





export const MyJournal = () => {
    const [records,setRecord] =useState([])
    const category =useRef("all")
    const baseURL = "http://localhost:3002"
    const {user} = useSelector((state)=>state)

    const getRecords = async()=>{   
        const userData = await getUser()
        const userID = userData.id
        const res = await axios.get(`${baseURL}/user-record/${userID}`);
        const userRecord = res.data.payload.data
        console.log(userRecord)
        setRecord(userRecord)
    }

    const handleCategoryChanger= async (e)=>{
        var res = ""
        const userData = await getUser()
        category.current =e.target.value
        const userID = userData.id
        const selectedCategory = category.current
        if(selectedCategory === "all"){

             res = await axios.get(`${baseURL}/user-record/${userID}`);
             setRecord(res.data.payload.data)
        }else{
             res = await axios.get(`${baseURL}/user-record/${userID}/${selectedCategory}`);
             setRecord(res.data.payload.data)



        }

        // const userRecord = res.data.payload.data
        // setRecord(userRecord)

    }


    const  load = async()=>{
        await getRecords()
    }
    useEffect(()=>{
        load()

    },[category])



    return (
        <div className="myJournal-container">
            <Navbar />
            <div className="journal-text-container">
                My Journal
            </div>
            <div className="dropdown-container">
                <select name="category" id="category" className='category-item-record' onChange={handleCategoryChanger} >
                    <option className='dropdown-menu' value="all" onChange={handleCategoryChanger} >All</option>
                    <option className='dropdown-menu' value="income" onChange={handleCategoryChanger}>Income</option>
                    <option className='dropdown-menu' value="outcome" onChange={handleCategoryChanger}>Outcome</option>
                </select>
            </div>
            <div className="record-content-container">
                    {
                    records.map((data,i)=>{
                        const date = new Date(data.dates)
                        

                            
                            return(
                                
                                <div className="record-box">
                                    <div className="icon-record">
                                        <img className='icon-img'src={data.category ? "https://i.pinimg.com/236x/04/de/1f/04de1f4f599353783598ed5fafb9fb13.jpg" :"https://i.pinimg.com/236x/a0/b4/75/a0b475843667f33e965935f63980b9ce.jpg" } alt="income" />
                                        <p className='category-text'>{data.category}</p>
                                    </div>
                                    <div className="record-description-box">{data.description}</div>
                                    <div className="status-box">
                                        <div className="record-amount-box">Rp {data.amount}</div>
    
                                        
                                        
                                        
                                        <div className="date-box">{`${date.getFullYear()}-${date.getMonth() < 10 ? "0"+date.getMonth() : date.getMonth()  }-${date.getDate()}`}</div>
                                    </div>
                                 </div>
                                 
    
                            )
                    })}



                  
                 
            </div>
            <div className="add-record">
                        <Link className="add-record-btn original-button" to="/addRecord" >+ Add Record</Link>
            </div>

        </div>







    )

}