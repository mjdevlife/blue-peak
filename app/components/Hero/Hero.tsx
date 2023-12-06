import React from 'react';
import hero from '/public/images/hero.webp';
import styles from './Hero.module.css';
import Image from 'next/image';
import fun from '/public/images/per_fun.png';

const Hero = () => {
  return (
    <div className='relative isolate overflow-hidden pt-14 '>
      <Image
        src={hero}
        alt='Blue Peak Innovations hero image'
        className='absolute inset-0 -z-10 h-full w-full object-cover brightness-50'
      />
      <div className={`container ${styles.gridContainer}`}>
        <div className={`${styles.textContainer} sm:text-left`}>
          <h1 className='text-2xl font-bold  text-white sm:text-5xl w-full pb-6'>
            Blue Peak Innovations
          </h1>
          <h2 className='text-xl font-bold  text-white sm:text-3xl w-full'>
            - High Performance Flat and Thin Wind Turbine
          </h2>
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
        <div className={`${styles.turbine} hidden sm:block `}>
          <Image src={fun} alt='Wind Turbine' className='w-75' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// mx-auto max-w-2xl py-32 px-4 sm:py-48 lg:py-56
