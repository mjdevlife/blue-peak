'use client';

import './slick.css';
import Slider, { Settings } from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import slider1 from '/public/images/mobile/1.png';
import slider2 from '/public/images/mobile/2.png';
import slider3 from '/public/images/mobile/3.png';
import slider4 from '/public/images/mobile/4.png';
import slider5 from '/public/images/mobile/5.png';
import slider6 from '/public/images/mobile/6.png';
import slider7 from '/public/images/mobile/7.png';
import slider8 from '/public/images/mobile/8.png';
import slider9 from '/public/images/mobile/9.png';

const images = [
  {
    id: 1,
    src: slider1,
  },
  {
    id: 2,
    src: slider2,
  },
  {
    id: 3,
    src: slider3,
  },
  {
    id: 4,
    src: slider4,
  },
  {
    id: 5,
    src: slider5,
  },
  {
    id: 6,
    src: slider6,
  },
  {
    id: 7,
    src: slider7,
  },
  {
    id: 8,
    src: slider8,
  },
  {
    id: 9,
    src: slider9,
  },
];

export default function MobileSlider() {
  var settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='container mx-auto'>
      <Slider {...settings} className='text-white'>
        {images.map((img) => (
          <div key={img.id}>
            <Image
              src={img.src}
              alt='A chart evidence of blue peak innovations'
              className='max-w-full py-10 lg:ml-[200px]'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
