import Image from 'next/image';
import styles from './Evidence.module.css';
import evidence from '/public/images/homedata.png';
import chart1 from '/public/images/chart1.jpeg';
import chart2 from '/public/images/chart2.jpeg';
import chart3 from '/public/images/chart3.jpeg';
import CardList from './CardList';

const Evidence = () => {
  return (
    <section className='container mx-auto mt-12'>
      <h2 className='text-center 3xl sm:text-5xl font-bold'>Evidence</h2>
      <p className='leading-6 text-center py-6 text-gray-700'>
        Comparison of the performance of our new design with existing wind
        turbines, using data and evidence to support our claims
      </p>
      <div className={styles.statsContainer}>
        <figure>
          <Image
            src={evidence}
            alt='A figure of evidence data'
            className='max-w-full'
          />
        </figure>
        <div>
          <CardList />
        </div>
      </div>
      <div className={styles.charts}>
        <div>
          <figure>
            <Image
              src={chart1}
              alt='A chart evidence of blue peak innovations'
              className='max-w-full'
            />
          </figure>
          <figure>
            <Image
              src={chart2}
              alt='A chart evidence of blue peak innovations'
              className='max-w-full'
            />
          </figure>
        </div>
        <div className='mt-10'>
          <figure>
            <Image
              src={chart3}
              alt='A chart evidence of blue peak innovations'
              className='max-w-full'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
