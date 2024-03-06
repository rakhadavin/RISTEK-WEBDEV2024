import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Logout } from '../Redux/Slice';
import { useEffect, useState } from "react";
import { getUser } from "../utils/user";

const Navbar = ()=>{
    const {user} = useSelector((state)=>state)
    const [userNow ,setUser] = useState("")
    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const logoutHandler = ()=>{
        window.localStorage.clear()
        dispatch(Logout)
        navigateTo("/")
    }

    const cekUser = async ()=>{
        const user = await getUser()
        setUser(user)
        console.log('ini user nya : ',userNow)
        if(userNow === ""){
            navigateTo("/")
        }else{
            navigateTo("/home")



        }
    }

  


    return(

        <div className="navbar-container">
        <div className="navbar">
            <div className="logo">MyFinance</div>
            <div className="menus">
                <a className="menu Home"  href="/home">Home</a>
                <a href="/myJournal" className="menu MyJournal">MyJournal</a>
                <a href="" className="menu About">About</a>
                <a href="" className="menu Contact-us">Contact Us</a>
            </div>
            <div className={!user.login_status==false ? "profile-none" : "profile"}>
                <i className="FaUserCircle"></i>
                <button className="logout-btn" onClick={logoutHandler}>LOGOUT</button></div>
        </div>
    </div>
    )
   
}

export default Navbar;