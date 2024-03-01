import axios from "axios"

export const getUser = async()=>{
    const baseURL = "http://localhost:3002"
    const userData = window.localStorage.getItem("USER");
    console.log("USER DATA : ",userData)
    const response = await axios.get(`${baseURL}/user`)
    var daftarUser = response.data.payload.data;
    return (JSON.parse(userData))
    // var userTarget = daftarUser.find(obj => obj.username === userData)

}