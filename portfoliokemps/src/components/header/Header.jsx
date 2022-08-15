import React from 'react';
import './header.css';
import CTA from './CTA'
import ME from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header_container">
      <div className='header-1'>
      <h5>Hello I'm</h5>
        <h1>Kempsly Silencieux</h1>
        <h5 className="text-light" >Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        </div>
        <div className='header-2'>
        <div>
          <img src={ME} className="me" alt='me' />
        </div>
        {/* <a href="#contact" className='scroll_down'>Scroll Down</a> */}
      </div>
      </div>
        
    </header>
  )
}

export default Header;
