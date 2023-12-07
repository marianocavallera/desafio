import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='carouselContainer' >
    <Slider {...settings}>
      <div className='carCard'>
        <img src="https://www.carone.com.ar/wp-content/uploads/2021/09/renault-2022-kangoo-express.png" alt="Imagen 1" />
        <h1>Renault Kangoo 2023 $1800</h1>
      </div>
      <div className='carCard'>
        <img src="https://www.carone.com.ar/wp-content/uploads/2021/09/renault-2022-logan.png" alt="Imagen 1" />
        <h1>Renault Kangoo 2023 $1800</h1>
      </div>
      <div className='carCard'>
        <img src="https://www.carone.com.ar/wp-content/uploads/2021/09/renault-2022-alaskan1.png" alt="Imagen 1" />
        <h1>Renault Kangoo 2023 $1800</h1>
      </div>

    </Slider>
    </div>
  );
};

export default Carousel;
