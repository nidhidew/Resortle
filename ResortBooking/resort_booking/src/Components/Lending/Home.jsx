import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../../App.css";
import { MdLocalDining } from "react-icons/md";
import { TbCampfire } from "react-icons/tb";
import { FaBus } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
const Home = () => {
  const roomnav = useNavigate();
  const handleRoomButton = () => {
    roomnav('/rooms');
  }
  return (
    <div>
      {/* <h1><center>Home</center></h1> */}
      <div className="section_1">
        <div className="bg_section_1">
          <div className="container_1">
            <center>
              <h1 className="header_container_1">LUXURIOUS ROOMS</h1>
            </center>
            <p className="underline_container_1"></p><br></br>
            <p>Deluxe rooms starting at ₹800</p>
            <br></br>
            <button className="rooms_btn text-white font-bold py-2 px-4 rounded" onClick={handleRoomButton}>
              Our Rooms
            </button>
          </div>
        </div>
      </div>
      <div className="section_2">
        <div className="bg_section_2">
          <center>
            <h1 className="header_container_1">Our Services</h1>
          </center>
          <p className="underline_container_2"></p>
          <div className="container_2">
          <h3 className="c2_text">Free Breakfast</h3>
          <div className="icon-home-services"><MdLocalDining className="homeicon"/></div>
          <p>Start Your Day on Us: Enjoy Complimentary Breakfast at Our Hotel!</p>
        </div>
        <div className="container_3">
          <h3 className="c2_text">BonFire</h3>
          <div className="icon-home-services"><TbCampfire className="homeicon"/></div>
          <p>Where Memories Ignite: Gather 'Round Our Bonfire at the Hotel!</p>
        </div>
        <div className="container_4">
          <h3 className="c2_text">Free Shuttle</h3>
          <div className="icon-home-services"><FaBus className="homeicon"/></div>
          <p>Ride Easy, Stay Hassle-Free: Enjoy Our Complimentary Shuttle Service!</p>
        </div>
        <div className="container_5">
          <h3 className="c2_text">Free Cocktails</h3>
          <div className="icon-home-services"><FaCocktail className="homeicon"/></div>
          <p>Indulge in Luxury: Cocktails on the House!</p>
        </div>
        </div>
        
      </div>
      <div className="section_3">
        <div className="bg_Section_3">
          <center><h1 className="header_container_3">Featured Rooms</h1></center>
          <p className="underline_container_3"></p><br></br>
          <div className="container_6 p-6 relative absolute inset-0 bg-white shadow-md transform">
            <h1 className="img_text">Single Room</h1>
            <div className="img_6">
            </div>
            <Link to="/single_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_7 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Double Room</h1>
            <div className="img_7">
            </div>
            <Link to="/double_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_8 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Triple Room</h1>
            <div className="img_8">
            </div>
            <Link to="/triple_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_9 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Deluxe Room</h1>
            <div className="img_9">
            </div>
            <Link to="/deluxe_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_10 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Executive Room</h1>
            <div className="img_10">
            </div>
            <Link to="/exec_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_11 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Suite Room</h1>
            <div className="img_11">
            </div>
            <Link to="/suite_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_12 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Resorts Room</h1>
            <div className="img_12">
            </div>
            <Link to="/resort_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
          <div className="container_13 p-6 relative absolute inset-0 bg-white shadow-md transform">
          <h1 className="img_text">Twin Room</h1>
            <div className="img_13">
            </div>
            <Link to="/twin_room"><button className="rooms_block_btn text-white font-bold py-2 px-4 rounded">Feature</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
