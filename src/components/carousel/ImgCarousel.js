import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImgCarouselStyle.css';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';
import KeyWest from '../../assets/keywest.jpg';

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Maldives} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Maldives2} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Maldives3} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={KeyWest} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
