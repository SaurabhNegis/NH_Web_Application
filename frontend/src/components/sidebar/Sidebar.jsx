import React from 'react';
import "./Sidebar.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <motion.div
      className='sidebar'
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      exit={{ x: -250, opacity: 0 }}
    >
      <img src={assets.logo} alt="sidebar-logo" className='sidebar-logo' />
      <ul className="navbar-menu2">
        <li className="treks">
          <a href="#">Treks</a>
        </li>
        <li className="weeken-gatways">
          <a href="#">Weekend getaways</a>
        </li>
        <li className="yatra-tour">
          <a href="#">Yatra tour</a>
        </li>
        <li className="advanture-trips">
          <a href="#">Adventure trips</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;