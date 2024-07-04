import React,{useState} from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {

      
      const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("treks")} className={menu=="treks"?"active":""}>Treks</li>
        <li onClick={()=>setMenu("weeken-gatways")}className={menu=="weeken-gatways"?"active":""}>Weeked getaways</li>
        <li onClick={()=>setMenu("yatra-tour")}className={menu=="yatra-tour"?"active":""}>Yatra tour</li>
        <li onClick={()=>setMenu("advanture-trips")}className={menu=="advanture-trips"?"active":""}>Advanture trips</li>
        <li>More</li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-call-icon">
          <div className="round-full">
          <img src={assets.call_icon} alt="" className="round-color"  style={{ width: 14, height: 14}} />

          </div>
          <span >
            <p  >Call Us</p>
            <span >+91 9557082496</span>
          </span>
        </div>
        <div className="round-full">
        <img src={assets.log_in} alt="" className="round-color"  style={{ width: 17, height: 17}}/>

        </div>


      </div>
    </div>
  );
};

export default Navbar;
