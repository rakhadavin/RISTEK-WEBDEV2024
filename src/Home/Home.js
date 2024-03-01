import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import { FaUserCircle } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { setUserLogin } from '../Redux/Slice';

// import Button from 'react-bootstrap/Button';
const Home = () => {
    const baseURL = "http://localhost:3002"
    const {user} = useSelector((state)=>state)
    const [fields, setValue] = useState({username:"",pass:""})
    const [userData,setUser] = useState("")
    const [userTarget,setUserTarget] = useState("")
    const navigateTo = useNavigate()
    const dispatch = useDispatch()

    const getUser = async () => {
        console.log(user.data)
        const response = await axios.get(`${baseURL}/user`)
        var daftarUser = response.data.payload.data;
        console.log(daftarUser)
        console.log(daftarUser.find(obj => obj.username == fields.username))
        var userTarget = daftarUser.find(obj => obj.username === fields.username)
        setUserTarget(userTarget)
        console.log(userTarget)
        console.log(daftarUser.find(obj => obj.username == fields.username))
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
        getUser()
        console.log(userData)
        if (fields.pass === userData.password ){
            console.log("Berhasil Login")
            dispatch(setUserLogin({
                name : userData.name,
                detail : userData,
                
            }))
            console.log(userData)
           
            navigateTo("/home")
        }else{
            console.log("Username or Password in correct !")
        }
    }


    return (
        <div className="home-page">
            <Navbar />
          

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
                                    <button class="button-21" role="button" onClick={getUser}>cek redux</button>

                                </div>
                                <div className="create-account-text">
                                    Don't have an account yet? <a href="/register">Register Here</a>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grafik">
                    </div>




                </div>

            </div>



        </div>
    )
}

export default Home