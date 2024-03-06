import {configureStore} from '@reduxjs/toolkit'
import userReducer, { Logout, setUserLogin } from './Slice'
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"

const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers(
{    user : setUserLogin,Logout}

)
const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({




    reducer:{
        user : persistedReducer,
    }

})
