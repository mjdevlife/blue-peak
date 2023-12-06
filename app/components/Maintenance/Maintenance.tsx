import React from 'react';
import styles from './Mantenance.module.css';
import cone from '/public/images/cone.svg';
import Image from 'next/image';
import fun from '/public/images/per_fun.png';
const Maintenance = () => {
  return (
    <section className={`${styles.maintenance} mb-24 mt-10 mx-auto`}>
      <header className='px-4 py-8'>
        <h2 className='text-center 3xl sm:text-5xl font-bold'>
          Manufacturing and Maintenance
        </h2>
        <p className='leading-6 text-center py-6 text-gray-700'>
          Our wind turbine design is not only more efficient, but also more
          cost-effective to manufacture and maintain. {`Here's`} how:
        </p>
      </header>
      <div className={`${styles.contenContainer} md:container mx-auto`}>
        <div className='-mb-[200px] -mt-5'>
          <div className='flex items-center justify-center'>
            <Image
              src={cone}
              alt='A graphical art'
              className='max-w-xs sm:mr-5'
            />
          </div>
          <div className='bg-[#062143]  mt-5 flex text-sm flex-col items-center justify-center text-white leading-6 px-6 py-14'>
            <div>
              <p className='mb-10 mt-14 py-5'>
                The wing is composed of three sides, and the part with three
                sides together reaches the top. In other words, it is like
                cutting off the pyramid.
              </p>
            </div>
          </div>
        </div>
        {/* second 2 */}
        <div className={`${styles.alignCardsMobile} mt-8`}>
          <div className='bg-[#062143] flex text-sm flex-col items-center justify-center text-white leading-6 px-6 py-14 '>
            <p className='mb-10'>
              Wing is a comprehensive analysis of the wings of flying birds,
              reflecting the air compression principle formed on the front of
              the wings of birds.
            </p>
            <p>
              The wing, like the parabolic mirror antenna reflector, improves
              the air density by focusing the air flow, and maintains the
              pressure at the front of the wing, thus improving the performance.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <Image src={fun} alt='Wind Turbine' className='w-1/3 mt-8' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
