import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import ReorderIcon from '@material-ui/icons/Reorder'
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import Education from '../Pages/Education';
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExtendNavbar(false)
  }, [location])

  const email = 'hasira84@gmail.com'; 
  const handleHireClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (

    <div className="header">
      <nav>
        <div className="toggleButton">
          <button onClick={() => setExtendNavbar((prev) => !prev)}><ReorderIcon /></button>
        </div>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src={logo} alt="logo" />Hasir Ali
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleNav}>
            <span>
              <i className={navOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </span>
          </div>
        </div>


        <ul className={`nav__links ${navOpen ? 'open' : ''}`} id="nav-links">




{/*  */}
          <a to="/" className="link">
            <Link to={'/'}>Home</Link>
          </a>

          <li className="link">
            <a href="#skills">About</a>
          </li>

          <li className="link">
            <Link to={'/Education'} > Education </Link>
          </li>

          <li className="link">
            <a href="#projects">Projects</a>
          </li>

          {/* <li className="link">
            <a href="#footer">Contact</a>
          </li> */}

          <li className="link">
            <button className="btn" onClick={handleHireClick}>
              Hire
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
