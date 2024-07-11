import React, { useState, useRef} from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";
import  OutsideClickHandler  from "react-outside-click-handler";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null); // Create a reference to the sidebar container

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOutsideClick = () => {
    if (toggle) {
      setToggle(false);
    }
  };





  return (
    <div>
     
    <nav className={`navbar ${toggle? "sidebar-open" : "sidebar-closed"}`}>
       {/* left side of navbar */}

       <div className="navbar-left">
        <div className="round-full toggle-icon" onClick={() => setToggle(!toggle)}>
          <div style={{ width: 17, height: 17 }} >
          {toggle? < IoClose className="close-icon" /> : < TfiMenuAlt/>}
         

          </div>
          </div>

          <Link to="/">
            <motion.img
              src={assets.logo}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "sprint"}}
              alt=" "
              className="logo"
            />
          </Link>

       </div>


  {/* overlay element */}
  {toggle && <div className="overlay" />}



    {/* <Sidebar/> */}

    {/* sidebar container */}
    {/* {toggle && (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      )} */}
{/* 
   {toggle && (
          <motion.div
            className="sidebar-container"
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.05, ease: "easeInOut" , type: "sprint"}}
          >
            <Sidebar />
          </motion.div>
        )} */}


       {/* sidebar container */}
       {toggle && (
          <OutsideClickHandler
            onOutsideClick={handleOutsideClick}
            ref={sidebarRef} // Pass the reference to the OutsideClickHandler
          >
            <motion.div
              className="sidebar-container"
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.05, ease: "easeInOut", type: "sprint" }}
            >
              <Sidebar />
            </motion.div>
          </OutsideClickHandler>
        )}
      

      
    {/* middle of navbar */}

    
     <ul className= "navbar-menu">
        <li className= "treks">
          Treks
        </li>
        <li  className="weeken-gatways">
          Weeked getaways
        </li>
        <li  className="yatra-tour">
          Yatra tour
        </li>
        <li  className= "advanture-trips">
          Advanture trips
        </li>
        <li>More</li>
      </ul>



    {/*  Right side of navbar*/}

      <div className="navbar-right">
      <div className="round-full">
          <img src={assets.search} alt="" className="round-color" style={{ width: 17, height: 17 }} />
        </div>
        <div className="navbar-call-icon">
          <div className="round-full">
            <img src={assets.call_icon} alt="" className="round-color" style={{ width: 14, height: 14 }} />
          </div>
          <span className="call-details">
            <p>Call Us</p>
            <span>+91 9557082496</span>
          </span>
        </div>
        <div className="round-full log-in">
          <img src={assets.log_in} alt="" className="round-color" style={{ width: 17, height: 17 }} />
        </div>


        
        
      </div>

     
    </nav>
    </div>
  );
};

export default Navbar;

