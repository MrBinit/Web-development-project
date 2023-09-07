import React, { useState } from "react";
import './Login-Page.css';
import login from './Images/login.png';
import { Link } from 'react-router-dom';

const Login_Page = () => {
  window.scrollTo(0, 0);
  // // State to store user input (name and ID)
  // const [name, setName] = useState("");
  // const [id, setId] = useState("");

  // // Placeholder login functionality
  // const handleLogin = () => {
  //   if (name && id) {
  //     // Perform your authentication logic here
  //     // For example, you can make an API request to validate the user's credentials
  //     alert(`Logged in as ${name}`);
  //   } else {
  //     alert("Please enter your name and ID.");
  //   }
  // };

  return (
    <>
      <div className="Login_Page">
        <div className="Canteen">
          <div className="Kings_Canteen">
            <h1> King's</h1>
            <h1>Canteen</h1>
          </div>

          <div className="Grab_a_bite">
            <h1> <i>Grab a</i></h1>
            <h1> <i>bite!</i></h1>
          </div>
        </div>

        <div className="Input_Container">
          <div className="Homepage_link">
            <ul>
              <li>
                <Link to="/"> <h2>Home</h2></Link>
              </li>
            </ul>
          </div>
          <img src={login} alt="Login" />
          <input
            className="Input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="Input"
            placeholder="ID Number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div className="Login-button" onClick={handleLogin}>
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_Page;
