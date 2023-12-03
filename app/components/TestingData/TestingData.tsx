import Image from 'next/image';
import styles from './TestingData.module.css';
import testing1 from '/public/images/testing1.png';

const TestingData = () => {
  return (
    <section className={`${styles.testingData} mx-auto`}>
      <header className='pt-10'>
        <h2 className='text-center 3xl sm:text-5xl font-bold'>Testing Data</h2>
        <p className='leading-6 text-center py-6 text-gray-700'>
          Our wind turbine design has undergone rigorous testing to compare its
          performance with existing wind turbine designs. Here are some of the
          results
        </p>
      </header>
      <div className='flex items-center justify-center'>
        <Image
          src={testing1}
          alt='A chart evidence of blue peak innovations'
          className='max-w-full py-10'
        />
      </div>
    </section>
  );
};

export default TestingData;
