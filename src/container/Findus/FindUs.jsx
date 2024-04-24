import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>9 Carver Close, Stratton St Margaret, CW5 8PY</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Mon - Friday 08:00am - 11:00pm</p>
        <p className='p__opensans'>Sat - Sun 08:00am - 01:00am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
