import React from 'react';
import hero from '/public/images/hero.webp';
import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative isolate overflow-hidden pt-14 '>
      <Image
        src={hero}
        alt='Blue Peak Innovations hero image'
        className='absolute inset-0 -z-10 h-full w-full object-cover brightness-50'
      />
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-2xl leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20'>
            Blue Peak Innovations
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-3xl font-bold  text-white sm:text-6xl'>
            High Performance Flat and Thin Wind Turbine
          </h1>
          <p className='mt-6 text-lg leading-8 text-white'>
            Blue Peak Innovations introduces our revolutionary High Performance
            Flat and Thin Wind Turbine, designed to address the major challenges
            facing the wind energy industry.
          </p>
          <h3 className='mt-6 text-2xl font-extrabold leading-8 text-white'>
            Our new design has an efficiency of{' '}
            <span className='underline'>0.5437</span>
          </h3>
          <p className='mt-6 text-lg leading-8 text-white'>
            With improved efficiency, reduced production costs, and increased
            power generation, our wind turbine offers a reliable and
            cost-effective energy source.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
