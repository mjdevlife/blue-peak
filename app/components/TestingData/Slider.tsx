'use client';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import slider1 from '/public/images/slider1.png';
import slider2 from '/public/images/slider2.png';

export default function SimpleSlider() {
  var settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='container mx-auto'>
      <Slider {...settings}>
        <div>
          <Image
            src={slider1}
            alt='A chart evidence of blue peak innovations'
            className='max-w-full py-10 lg:ml-[200px]'
          />
        </div>
        <div>
          <Image
            src={slider2}
            alt='A chart evidence of blue peak innovations'
            className='max-w-full py-10 lg:ml-[200px]'
          />
        </div>
      </Slider>
    </div>
  );
}
