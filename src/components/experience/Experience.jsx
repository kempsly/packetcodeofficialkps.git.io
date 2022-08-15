import React from 'react';
import './experience.css';
import {BsUiChecksGrid} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience' className='experience_general'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Developement</h3>
        <div className="experience_content">
        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>HTML</h4>
         <small className='text-light'>Experienced</small></div>
        </article>
        
        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>CSS</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>JavaScript</h4>
         <small className='text-light'>Experienced</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
        <div> <h4>Bootstrap</h4>
         <small className='text-light'>Experienced</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>Tailwind</h4>
         <small className='text-light'>Experienced</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>React</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>W3.css</h4>
         <small className='text-light'>Experienced</small></div>
        </article>
        </div>
      </div>
{/* backend skills */}
      <div className="experience_backend">
      <h3>Backend Developement</h3>
        <div className="experience_content">
        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>Node JS</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>
        
        {/* <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>MongoDB</h4>
         <small className='text-light'>Intermediate</small></div>
        </article> */}

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
        <div> <h4>PHP</h4>
         <small className='text-light'>Experienced</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>MySQL</h4>
         <small className='text-light'>Experienced</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>Python</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>

        <article className='experience_details'>
         <BsUiChecksGrid className='experience_details-icon' />
         <div><h4>SQL</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>

        </div>

      </div>

      </div>
    </section>
  )
}

export default Experience;
