import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Lending/Home';
import Footer from './Components/Public/Footer';
import Header from './Components/Public/Header';
import Rooms from './Components/Lending/Rooms';
import Login from './Components/Lending/Login';
import Registeration from './Components/Lending/Registeration';
import Single_Room from './Components/Lending/Single_Room';
import Double_Room from './Components/Lending/Double_Room';
import Triple_room from './Components/Lending/Triple_room';
import Deluxe_Room from './Components/Lending/Deluxe_Room';
import Exec_room from './Components/Lending/Exec_room';
import Suite_room from './Components/Lending/Suite_room';
import Resort_room from './Components/Lending/Resort_room';
import Twin_room from './Components/Lending/Twin_room';

const App = () => {
  return (
    // <div>
    //   <Header />
    //     <Home />
    //   <Footer />
    // </div>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registeration" element={<Registeration/>} />
          <Route path="/single_room" element={<Single_Room />} />
          <Route path="/double_room" element={<Double_Room />} />
          <Route path="/triple_room" element={<Triple_room />} />
          <Route path="/deluxe_room" element={<Deluxe_Room />} />
          <Route path="/exec_room" element={<Exec_room/>} />
          <Route path="/suite_room" element={<Suite_room/>} />
          <Route path="/resort_room" element={<Resort_room />} />
          <Route path="/twin_room" element={<Twin_room />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
