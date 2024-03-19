import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import FindEmployee from './Components/FindEmployee';
import DeleteEmployee from './Components/DeleteEmployee';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/addemployee" element={<AddEmployee/>}/>
        <Route path="/updateemployee" element={<UpdateEmployee/>}/>
        <Route path="/findemployee" element={<FindEmployee/>}/>
        <Route path="/deleteemployee" element={<DeleteEmployee/>}/>

        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
