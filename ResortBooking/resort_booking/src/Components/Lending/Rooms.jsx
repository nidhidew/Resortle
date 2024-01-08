import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../App.css";
const Home = () => {
  const homenav = useNavigate();
  const handleHomeButton = () => {
    homenav("/");
  };
  const [selectedRoom, setSelectedRoom] = useState("option");
  const handleRoomType = (event) => {
    setSelectedRoom(event.target.value);
  };
  const [selectedGuestnum, setSelectedGuestnum] = useState("option");
  const handleGuestNum = (event) => {
    setSelectedGuestnum(event.target.value);
  };
  const [selectedroomPrice, setroomPrice] = useState(2000);
  const handleRoomPrice = (event) => {
    setroomPrice(event.target.value);
  };
  const [selectedRoomSize, setRoomSize] = useState(0);
  const handleRoomSize = (event) => {
    setRoomSize(event.target.value);
  };
  const [selectBreakfast, setBreakfast] = useState(0);
  const handleBreakfast = (event) => {
    setBreakfast(event.target.checked);
  };

  return (
    <div>
      <div className="section_1">
        <div className="bg_section_room_1">
          <div className="container_1">
            <center>
              <h1 className="header_container_1">AVAILABLE ROOMS</h1>
            </center>
            <p className="underline_container_1"></p>
            <br></br>
            <button
              className="rooms_btn text-white font-bold py-2 px-4 rounded"
              onClick={handleHomeButton}
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
      <div className="section_3">
        <div className="bg_Section_3">
          <center>
            <h1 className="header_container_3">Search Rooms</h1>
          </center>
          <p className="underline_container_3"></p>
          <br></br>
          <div>
            <div className="roomTypeForm">
              <label>Choose a Room Type:</label>&nbsp;&nbsp;
              <select
                id="roomtype"
                value={selectedRoom}
                onChange={handleRoomType}
              >
                <option value="option">Select an option</option>
                <option value="singleR">Single Room</option>
                <option value="doubleR">Double Room</option>
                <option value="tripleR">Triple Room</option>
                <option value="deluxeR">Deluxe Room</option>
                <option value="executiveR">Executive Room</option>
                <option value="suiteR">Suite Room</option>
                <option value="resortR">Resorts Room</option>
                <option value="twinR">Twin Room</option>
              </select>
            </div>

            <div className="guestsNumForm">
              <label>Choose a Number of Guests:</label>&nbsp;&nbsp;
              <select
                id="guestnum"
                value={selectedGuestnum}
                onChange={handleGuestNum}
              >
                <option value="option">Select an option</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="priceForm">
              <label>Select Price range: {selectedroomPrice}</label>&nbsp;&nbsp;
              <input
                type="range"
                min="1"
                max="2000"
                id=""
                value={selectedroomPrice}
                onChange={handleRoomPrice}
              />
            </div>

            <div className="roomSizeForm">
              <label>Room Size:</label>&nbsp;&nbsp;
              <input
                type="number"
                name=""
                id=""
                min="0"
                max="1000"
                value={selectedRoomSize}
                onChange={handleRoomSize}
              />
            </div>
            <div className="breakfastForm">
              <label>BreakFast </label>&nbsp;&nbsp;
              <input type="checkbox" value={selectBreakfast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
