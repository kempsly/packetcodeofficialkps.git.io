import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Rick Tienson Lubin',
    review: "Without doubt one of the most talented programmers out there.  I always go back to him when I'm out of my depth and he's never failed to deliver what I ask for.   Smart, trustworthy and professional.   You won't be disappointed."

  },

  {
    avatar: AVTR2,
    name: 'Nahum Maurice',
    review: "Kempsly is a clear programer with the tenacity and confidence to really dig in to tricky programing scenarios and the collaborative friction that's needed to produce excellent work."

  },

  {
    avatar: AVTR3,
    name: 'Fabrice Dubois',
    review: "Kempsly has done an amazing work. Everything is exactly how I expected. It was a great pleasure working with you!"


  },

  {
    avatar: AVTR4,
    name: 'Shelo.js',
    review: 'Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!'

  },
]


const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials_general'>
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>

        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial testimonial-general">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )

        })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials;
