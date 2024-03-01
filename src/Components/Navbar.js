import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Logout } from '../Redux/Slice';

const Navbar = ()=>{
    const {user} = useSelector((state)=>state)
    const dispatch = useDispatch()
    const navigateTo = useNavigate()

    const logoutHandler = ()=>{
        dispatch(Logout)
        navigateTo("/")
    }



    return(

        <div className="navbar-container">
        <div className="navbar">
            <div className="logo">MyFinance</div>
            <div className="menus">
                <a href={!user.login_status ? "/home" : "/"} className="menu Home">Home</a>
                <a href="/myJournal" className="menu MyJournal">MyJournal</a>
                <a href="" className="menu About">About</a>
                <a href="" className="menu Contact-us">Contact Us</a>
            </div>
            <div className={!user.login_status==false ? "profile-none" : "profile"}><button className="logout-btn" onClick={logoutHandler}>LOGOUT</button></div>
        </div>
    </div>
    )
   
}

export default Navbar;