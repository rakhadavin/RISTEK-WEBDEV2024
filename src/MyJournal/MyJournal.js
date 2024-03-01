import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FaUserCircle } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import "./MyJournal.css"
import {useSelector,useDispatch} from 'react-redux';




export const MyJournal = () => {
    const baseURL = "http://localhost:3002"
const {user} = useSelector((state)=>state)

    const getRecords = async()=>{
        console.log(user)
        const res = await axios.get(`${baseURL}/user-record/${user.data.detail.id}`);
        console.log(res.data.payload)
    }




    return (
        <div className="myJournal-container">
            <Navbar />
            <div className="journal-text-container">
                My Journal
            </div>
            <div className="dropdown-container">
                <button onClick={getRecords}>CEK RECORDS</button>
                <select name="category" id="category" className='category-item-record'>
                    <option className='dropdown-menu' value="All" >All</option>
                    <option className='dropdown-menu' value="Income">Income</option>
                    <option className='dropdown-menu' value="Outcome">Outcome</option>
                </select>
            </div>
            <div className="record-content-container">
                <div className="record-box">
                    <div className="icon-record">
                        <img className='icon-img'src="https://i.pinimg.com/236x/04/de/1f/04de1f4f599353783598ed5fafb9fb13.jpg" alt="income" />

                    </div>
                    <div className="record-description-box">Gaji Bulanan</div>
                    <div className="status-box">
                        <div className="record-amount-box">Rp 30.000.000</div>
                        <div className="date-box">12 Januari 2024</div>
                    </div>
                </div>
                <div className="record-box">
                    <div className="icon-record">
                        <img className='icon-img' src="https://i.pinimg.com/236x/a0/b4/75/a0b475843667f33e965935f63980b9ce.jpg" alt="outcome" />
                    </div>
                    <div className="record-description-box">Pembelian Rumah PIK 5 Hektare</div>
                    <div className="status-box">
                        <div className="record-amount-box">Rp 3.000.000.000</div>
                        <div className="date-box">12 Januari 2024</div>
                    </div>
                </div>
            </div>


        </div>







    )

}