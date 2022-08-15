import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
// import emailjs from 'emailjs.com'



const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_97kam9v', 'template_mig5v1j', form.current, '4amjmxWamcrQg3C2M')
      //  e.target.reset();
  // };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>kempslysilencieux3@gmail <br/>
            .com</h5>
            <a href="mailto:kempslysilencieux3@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>kempslysilencieux</h5>
            <a href="https://www.facebook.com/kempsly.silencieux" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+79777441814</h5>
            <a href="https://wa.me/89777441814">Send a message</a>
            {/* <a href="https://api.whatsapp.com/send?phone" +79777441814" target="_blank">Send a message</a> */}
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholde='Your Message' required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>

        </form>
        {/*  <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholde='Your Message' required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>

        </form> */}
      </div>
    </section>
  )
}

export default Contact;
