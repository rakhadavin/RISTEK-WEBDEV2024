import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import { FaUserCircle } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { setUserLogin } from '../Redux/Slice';
import {Toaster,toast} from 'react-hot-toast'


// import Button from 'react-bootstrap/Button';
const Home = () => {
    const baseURL = "https://myfinance-backend.up.railway.app"
    const {user} = useSelector((state)=>state)
    const [fields, setValue] = useState({username:"",pass:""})
    const [userData,setUser] = useState("")
    const [userTarget,setUserTarget] = useState("")
    const navigateTo = useNavigate()
    const dispatch = useDispatch()

    const getUsers = async () => {
        const response = await fetch(`${baseURL}/user`)
        console.log("url : ",baseURL)
        console.log(response)
        var daftarUser = response.data.payload.data;
        var userTarget = daftarUser.find(obj => obj.username === fields.username)
        setUserTarget(userTarget)
        window.localStorage.setItem("USER",JSON.stringify(userData));
        console.log("ini loacal : ",window.localStorage.getItem("USER"))
        console.log(userData)
        if(userTarget == undefined){
            console.log("Username or Password Wrong !")
        }else{
            setUser(userTarget)
            dispatch(setUserLogin({
                name : userData.name,
                detail : userData,
                
            }))
            window.localStorage.setItem("USER",JSON.stringify(userData));
            console.log("ini loacal : ",window.localStorage.getItem("USER"))
            console.log(userData)
            console.log("berhasil login")
        }
    }

    
    
    const handleChanger=(e)=>{

        var id = e.target.name
        var value = e.target.value
        setValue((prev)=>{
            return{...prev,[id]:value}
        })
    }

    const login = async () =>{
        getUsers()
        if (fields.pass === userData.password ){
            console.log("Berhasil Login")
            dispatch(setUserLogin({
                name : userData.name,
                detail : userData,
                
            }))
            console.log(userData)
            toast.success('Login Successfully !.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
           
            navigateTo("/home")
        }else{
            console.log("salah")

            toast.error("Username or Password Is Incorret !")

        }
    }


    return (
        <div className="home-page">
           
        <div className="navbar-container">
        <div className="navbar">
            <div className="logo">MyFinance</div>
            <div className="menus">
                <a className="menu Home" href='/'>Home</a>
                <a href="/" className="menu MyJournal">MyJournal</a>
                <a href="" className="menu About">About</a>
                <a href="" className="menu Contact-us">Contact Us</a>
            </div>
        </div>
    </div>
          

            <div className="opening">
                <div className="opening-overlay">
                    <div className="content">
                        <div className="section1-content">
                            <div className="opening-text">
                                <div className="greetings">Here you are at the</div>
                                <div className="logo-text">MyFinance</div>

                            </div>
                            <div className="description-box">
                                <div className="description">Access current information about your income, </div>
                                <div className="description">expenses, and balance with ease. </div>
                            </div>
                            <div className="owner-quotes">
                                <div className="image-container">
                                    <img src="https://i.pinimg.com/564x/71/92/6a/71926a76438e129c6d08774da5924a93.jpg" alt="" className='image-owner' />
                                </div>
                                <div className="quotes">
                                    <p>Utilize tools that are easy to use to monitor your personal finances and effectively manage your budget. </p>
                                    <div className="owner-name">
                                        <p>- Rakha Davin</p>

                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="section2-content">
                            <div className="login-box">
                                <div className="login-text">
                                    Login
                                </div>
                                <div className="login-input">
                                    <input type="text" placeholder='Username' className='input-login' name="username"  onChange={handleChanger} />
                                    <input type="text" placeholder='Password' className='input-login'  name="pass"  onChange={handleChanger}/>
                                </div>
                                <div className="submit-place">
                                    <button class="button-21" role="button" onClick={login}>Submit</button>

                                </div>
                                <div className="create-account-text">
                                    Don't have an account yet? <a href="/register">Register Here</a>


                                </div>
                            </div>
                        </div>
                    </div>
                        
                    



                </div>

            </div>


            <div className="benefit">
                <div className="cover">
                    <div className="benefit-text">Only For You !</div>
                    <div className="content-benefit">
                        <div ><img src="/Assets/Benefits/Card.png" alt="" className="b1"/></div>
                        <div ><img src="/Assets/Benefits/Card2.png" alt="" className="b2"/></div>
                        <div ><img src="/Assets/Benefits/Card3.png" alt="" className="b3"/></div>
                    </div>
                    <div className="caption">Take charge of your finances going forward!</div>
                </div>
            </div>

            <div className="about-box">
                <div className="logo-about-box">
                    <div className="logo-text-about">MyFinance</div>
                    <div className="desc-about">Access current information about your </div>
                    <div className="desc-about">income, expenses, and balance with ease.</div>
                </div>
                <div className="developer-box">
                    <div className="developer-text">Meet Our Developer !</div>
                    <div >
                        <img src="Assets/Owner/Davin.jpg" alt=""  className="my-img"/>
                    </div>
                    <div className="identity">
                        <div className="name">Rakha Davin Bani Alamsyah</div>
                        <div className="major">Information System</div>
                    </div>
                </div>
                <div className="contact-box">
                <a className="instagram" href='https://www.instagram.com/rakha.davin_alamsyah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <img src="Assets/Contact/insatgram.png" alt="" className="instagram-logo logo-contact" />
                    <div className="instagram-account">rakha.davin_alamsyah</div>
                </a>
                <a className="linkedin" href='https://www.linkedin.com/in/rakha-davin-bani-alamsyah-0b038a262/'>
                <img src="Assets/Contact/linkedin.png" alt="" className="linkedin-logo logo-contact" />
                    <div className="linkdin-account">Rakha Davin Bani Alamsyah</div>
                </a>
                <a className="line" href='https://line.me/ti/p/4G5cZfi6s4'>
                    <img src="Assets/Contact/line.png" alt="" className="line-logo logo-contact" />
                    <div className="line-account">rakdav</div>
                </a>

                </div>

            </div>


        </div>
    )
}

export default Home