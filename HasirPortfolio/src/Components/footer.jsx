import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Footer.css'
function Footer() {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#"><img src={logo} alt="logo" />Hasir Ali</a>
          </div>
          <p>
            Welcome to my personal portfolio, where I share my professional journey, showcase my skills, and express my passion for creativity and innovation. Explore my work and experience the story behind each project.
          </p>
          <div class="footer__socials">
            <a href="https://www.facebook.com/profile.php?id=100095270901385" target='_blank' ><i class="ri-facebook-fill"></i></a>
            <a href="https://www.instagram.com/haxir_ali/" target='_blank'><i class="ri-instagram-line  "></i></a>
            <a href="https://twitter.com/haxir_ali" target='_blank'><i class="ri-twitter-fill"></i></a>
            <a href="https://github.com/hasirali" target='_blank'><i class="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/hasir-ali-b649851aa/" target='_blank'><i class="ri-linkedin-fill"></i></a>
          </div>
        </div>
        <div class="footer__col">
          <h4>About Me</h4>
          <div class="footer__links">
            <Link to={'/'} > Home </Link>
            <Link to={'/About'} > About </Link>
            <Link to={'/Education'} > Education </Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={'/Contact'} > Contact </Link>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <div class="footer__links">
            <a href="tel:7521989156">Phone</a>
            <a href="mailto:hasira84@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright ©Hasir Ali
      </div>
    </footer>
  )
}

export default Footer