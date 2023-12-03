import Evidence from './components/Evidence/Evidence';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import LikeIcon from './components/Performance/LikeIcon';
import Performance from './components/Performance/Performance';
import TestingData from './components/TestingData/TestingData';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Evidence />
      <TestingData />
      <Performance />
    </>
  );
};

export default Home;
