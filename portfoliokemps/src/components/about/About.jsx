import React from 'react';
import './about.css';
import ME from '../../assets/me.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about' className='about_general'>
      {/* <h5>Get To Know</h5> */}
      <h3 className='about_me-me'>About Me</h3>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />

          </div>

        </div>
        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Worlwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>I'm a Frontend and Backend Developer.Creating dynamic user Experience
          , UI effects and animations are my passion.
          I'm a very serious person and well structured,I'm an independent employee.
          I'm really very interested with all the field the related to technologies and 
          i'm ready to build great project with good and ambitious people.
          </p>
          <p id='contact_me'><a href='#contact' className='btn btn-primary'>Contact Me ...</a></p>
        </div>

      </div>
    </section>
  )
}

export default About;
