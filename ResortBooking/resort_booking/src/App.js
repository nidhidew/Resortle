import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Lending/Home';
import Footer from './Components/Public/Footer';
import Header from './Components/Public/Header';
import Rooms from './Components/Lending/Rooms';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
