import React from 'react';
import './services.css';
import { BsCheck2 } from 'react-icons/bs'


const Services = () => {
  return (
    <section id='services' className='services_general'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Website Maintenance</h3>
          </div>
          <ul className="service_list">
            <li><BsCheck2 className="service_list-icon" />
              <p> The main consideration is to manange your website effectively.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Websites are something that many people think you just create and not 
              worry about without the need for any ongoing maintenance. </p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Regular website maintenance becomes a vital consideration once your website is up and running, cause:</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Hackers will always be looking for a back door into your site and these exploits are more commonplace than you might think.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Website health check up.</p>
            </li>
          </ul>
        </article>
      {/* END OF UI/UX DESIGN */}

      <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>
          <ul className="service_list">
            <li><BsCheck2 className="service_list-icon" />
              <p>I’m a Web Programmer with an extensive programming and web development background,
               drawing on more than 3 years of experience in the industry.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Web programming, like life is best understood looking backwards.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p> Web development can range from developing a simple single static page of plain text 
              to complex web applications, electronic businesses, and social network services.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>I'am specialized in  two kinds of Web developer specialization: front-end developer, 
              back-end developer.</p>
            </li>
           
          </ul>
        </article>
      {/* END OF WEB DEVELOPEMENT*/}

      {/* <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li><BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BsCheck2 className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services;
