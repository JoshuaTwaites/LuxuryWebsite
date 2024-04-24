import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Our Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote Mark" />
          <p className='p__opensans'>He combines traditional techniques with modern innovations,</p>
        </div>
        <p className='p__opensans'>creating a menu that is as exquisite as it is unexpected. Each dish reflects his passion for fresh, seasonal ingredients and his dedication to culinary excellence. From the delicate amuse-bouche to the decadent desserts, every plate is a visual and gastronomic masterpiece.</p>
      </div>

      <div className="app__chef-sign">
        <p>Chef Kevin Luo</p>
        <p className='p__opensans'>Chef/Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>

    </div>
  </div>
);

export default Chef;
