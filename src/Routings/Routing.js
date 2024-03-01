import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import  {Register}  from '../Register/Register';
import Home from '../Home/Home';
import Record  from '../Records/Record';


const Routing = () => {
  return (
<Router>
  <Routes>
    <Route path = "/" element={<Home />} ></Route>
    <Route path = "/register" element={<Register />} ></Route>
    <Route path = "/addRecord" element={<Record />} ></Route>
    <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
  </Routes> 
</Router>
 
  )
}

export default Routing
