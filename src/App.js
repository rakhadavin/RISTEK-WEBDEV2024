import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import { Register } from './Register/Register';
import  HomeUser  from './UserHome/HomeUser';
import Record from './Records/Record';
import { MyJournal } from './MyJournal/MyJournal';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home />} ></Route>
          <Route path = "/home" element={<HomeUser />} ></Route>
          <Route path = "/register" element={<Register />} ></Route>
          <Route path = "/addRecord" element={<Record />} ></Route>
          <Route path = "/myJournal" element={<MyJournal />} ></Route>
          <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
          
        </Routes> 
    </Router>
    </div>
  );
}

export default App;
