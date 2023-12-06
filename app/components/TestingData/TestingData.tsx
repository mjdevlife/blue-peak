import styles from './TestingData.module.css';
import SimpleSlider from './Slider';

const TestingData = () => {
  return (
    <section className={`${styles.testingData} mx-auto`}>
      <header className='pt-10'>
        <h2 className='text-center text-2xl sm:text-5xl font-bold'>
          Testing Data
        </h2>
        <p className='leading-6 text-center py-6 text-gray-700'>
          Our wind turbine design has undergone rigorous testing to compare its
          performance with existing wind turbine designs. Here are some of the
          results
        </p>
      </header>
      <div className='px-4'>
        <SimpleSlider />
      </div>
    </section>
  );
};

export default TestingData;
