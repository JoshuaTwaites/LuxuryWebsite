import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Explore the new flavour' />
      <h1 className='app__header-h1'>Convenient Luxury Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>At the heart of the space, a grand chandelier sparkles like a constellation, illuminating the cocktail bar, where skilled mixologists craft bespoke drinks with the finest spirits and artisanal ingredients. The attentive staff navigates the room with grace, ensuring each guest feels like a VIP.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome Image" />
    </div>
  </div>
);

export default Header;
