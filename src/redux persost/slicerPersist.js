import {createAction, createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
name:"user", // sotre name
initialState:{

        data: {
            name:"Guest",
            detail : "",
            login_status : false
                     },// harusnya nnti pake UserIs
},
reducers:{
    setUserLogin : (state,action)=> {
        state.data.name = action.payload.name
        state.data.detail = action.payload.detail  //dasarnmya action.payload, sisanya sesuai sama apa yg lu jadikan param
        state.data.login_status = true
    },
    Logout : (state)=>{
        state.data.name = "Guest";
        state.data.detail = "";
        state.data.login_status=false;
        
    }
}
})


export  const {setUserLogin,Logout} = userSlice.actions
export default userSlice.reducer