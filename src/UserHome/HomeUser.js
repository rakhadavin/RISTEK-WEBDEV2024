import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../Components/Navbar';
import "./HomeUser.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { setUserLogin } from '../Redux/Slice';
import { getUser } from '../utils/user';


const HomeUser = ()=>{
    const {user} = useSelector((state)=>state)
    const baseURL = "http://localhost:3002"

    const cekRecord = async ()=>{
        const userData = window.localStorage.getItem("USER");
        console.log("ini loacal : ",window.localStorage.getItem("USER"))
        console.log(user)
        var userID = userData
        // console.log(userID)
        const users = await getUser()
        const user_id = users.id
        console.log(user_id)
    }





    return (
    <div className="container-home-user">
        <Navbar />
        {/* https://i.pinimg.com/564x/2b/47/85/2b47858564a375b6628025752d3f74cf.jpg */  }
        <div className="container-display">
            <div className="card-container">

                
            </div>
            <div className="card">
                <div className="pict-bal">
                    <div className="pp">
                        <img src="https://i.pinimg.com/236x/40/08/b9/4008b900de9d0f325fdb856f352058f4.jpg" alt="" className="pp-img" />
                    </div>
                    <div className="balance-box">
                        <div className="balance-name">Balance</div>
                        <div className="balance-amount">RP 99.000.000</div>
                    </div>
                </div>
                <div className="user-identity">
                    <div className="name">Rakha Davin Bani A.</div>
                    <div className="job">Software Enginer</div>
                    <div className="card-number">1382 3773 8541</div>
                    <div className="add-record">
                        <Link className="add-record-btn original-button" to="/addRecord" >+ Add Record</Link>
                        <button onClick={cekRecord}>Cek record</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>





    )
}

export default HomeUser;