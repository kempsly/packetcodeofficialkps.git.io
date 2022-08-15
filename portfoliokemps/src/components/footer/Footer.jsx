import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Kempsly.s</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://facebook.com"><FaFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kempsly.s. All right reserved.</small>

      </div>
    </footer>
  )
}

export default Footer;
