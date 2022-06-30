import React from 'react';
import './Hero.css';
import ImageTickets from '../../Assets/tickets.jpg';

const Hero = () => {
  return (
    <div>
        <section className='hero mt-0 d-flex align-items-center justify-content-sm-center'>
           <div className='container'>
              <div className='row backgroundImage'>
                  <div className='col-lg-6 d-flex align-items-center col-sm-12 mb-3'>
                  <div className='ms-5 align-items-center'>
                    <h1 className='Cinematickets'>Cinema Tickets</h1>
                    <p className='desc'> Digital platform that allows its customers to access the services of a business, reserve seats and buy tickets!</p>
                  <a href='#movies' className='moviesBtn'>Browse Movies</a>
                  </div>
                  </div>
                  <div className='col-lg-6 col-sm-12 align-items-center'>
                   <img src={ImageTickets} alt='Tickets' className='img-fluid align-items-center' />
                  </div>
              </div>
           </div>
        </section>
    </div>
  )
}

export default Hero;