import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


// DO NOT USE THE IMAGE IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Financial Visualisation',
    github: 'https://github,com',
    demo: 'file:///C:/Users/Kempsly/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Portfolio/react-portfolio-website-1/src/assets/portfolio1.jpg'

  },

  {
    id: 2,
    image: IMG3,
    title: 'Analytics',
    github: 'https://github,com',
    demo: 'file:///C:/Users/Kempsly/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Portfolio/react-portfolio-website-1/src/assets/portfolio3.jpg'

  },

  {
    id: 3,
    image: IMG9,
    title: 'Guitar Tamplate',
    github: 'https://github,com',
    demo: 'file:///C:/Users/Kempsly/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Portfolio/react-portfolio-website-1/src/assets/portfolio9.jpg'

  },

  {
    id: 4,
    image: IMG10,
    title: 'User Interface Template',
    github: 'https://github,com',
    demo: 'file:///C:/Users/Kempsly/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Portfolio/react-portfolio-website-1/src/assets/portfolio10.jpg'

  },

  {
    id: 5,
    image: IMG8,
    title: 'Ecommerce Dashbord',
    github: 'https://github,com',
    demo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80'

  },

  {
    id: 6,
    image: IMG6,
    title: 'Travel Agency',
    github: 'https://github,com',
    demo: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=475&q=80'

  }
]


const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio_general'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>

            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;
