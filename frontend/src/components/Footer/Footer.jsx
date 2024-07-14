import React, { useState, useEffect } from 'react';
import "./footer.css";
import { assets } from "../../assets/assets";
import { FaChevronUp } from 'react-icons/fa';


const Footer = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [showSeason, setShowSeason] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const handleCompanyClick = () => {
    setShowCompany(!showCompany);
  };

  const handleSeasonClick = () => {
    setShowSeason(!showSeason);
  };

  const handleQuickLinksClick = () => {
    setShowQuickLinks(!showQuickLinks);
  };






  return (
  <div className="footer-outsider">
         <div class=" contact-info2">
        <h4>Contact Info-</h4>
        <ul>
          <li>Near Nagar Palika, Gopeshwar, Chamoli, Uttrakhand 246401</li>
          <li>+91 9557082496</li>
          <li><a className='Email' href="mailto:info@northernhimalayas.com">info@northernhimalayas.com</a></li>
        </ul>
      </div>



<footer class="footer">
      <div class="social-links2">
      <div className='socials2'>
      <img src={assets.logo} alt="" className='logo-social' />
<h3>NH Socials</h3>
      </div>
        <ul>
        <li><img src={assets.instagram} className='social-logo' alt="" /></li>
        <li><img src={assets.youtube} className='social-logo' alt="" /></li>
        <li><img src={assets.linkedin} className='social-logo' alt="" /></li>
        <li><img src={assets.twitter} className='social-logo' alt="" /></li>
        </ul>
      </div>

  <div class="container">
    <div class="row">
    <div class="col-md-3 social-links">
      <div className='socials'>
      <img src={assets.logo} alt="" className='logo-social' />
<h3>NH Socials</h3>
      </div>
        <ul>
        <li><img src={assets.instagram} className='social-logo' alt="" /></li>
        <li><img src={assets.youtube} className='social-logo' alt="" /></li>
        <li><img src={assets.linkedin} className='social-logo' alt="" /></li>
        <li><img src={assets.twitter} className='social-logo' alt="" /></li>
        </ul>
      </div>
      <div className={`col-md-3 ${showCompany && windowWidth < 1000 ? 'show' : ''}`}>
        <div className="footer-flex-name-arrow">
        <h4>Company</h4> 
      <span className="arrow" onClick={handleCompanyClick}>
        {showCompany ? <FaChevronUp /> : <FaChevronUp className='arrow-up' />}
        </span>
        </div>
   
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">our Blogs</a></li>
          <li><a href="#">Career with Us</a></li>
        </ul>
       

      </div>
      <div className={`col-md-3 ${showSeason && windowWidth < 1000 ? 'show' : ''}`}>
    <div className="footer-flex-name-arrow">
      <h4>Treks by Season</h4>
        <span className="arrow" onClick={handleSeasonClick}>
        {showSeason ? <FaChevronUp /> : <FaChevronUp className='arrow-up' />}
        </span>
    </div>
        <ul>
          <li><a href="#">Spring</a></li>
          <li><a href="#">Summer</a></li>
          <li><a href="#">Monsoon</a></li>
          <li><a href="#">Autumn</a></li>
          <li><a href="#">Winter</a></li>
        </ul>

      </div>
    
      <div className={`col-md-3 ${showQuickLinks && windowWidth < 1000 ? 'show' : ''}`}>
     <div className="footer-flex-name-arrow">
      <h4>Quick Links</h4>
      <span className="arrow" onClick={handleQuickLinksClick}>
        {showQuickLinks ? <FaChevronUp /> : <FaChevronUp className='arrow-up' />}
        </span>
     </div>
     
        <ul>
          <li><a href="#">Treks</a></li>
          <li><a href="#">Weekend Getaways</a></li>
          <li><a href="#">Yatra Tour</a></li>
          <li><a href="#">Adventure Trips</a></li>
        </ul>
        

      </div>
      <div class="col-md-3 contact-info">
        <h4>Contact Info-</h4>
        <ul>
          <li>Near Nagar Palika, Gopeshwar, Chamoli, Uttrakhand 246401</li>
          <li>+91 9557082496</li>
          <li><a className='Email' href="mailto:info@northernhimalayas.com">info@northernhimalayas.com</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-links">
      <p>Copyright © 2024 Northern Himalayas - All Rights Reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
    </div>
  </div>
</footer>
</div>

  );
};

export default Footer;