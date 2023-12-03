import Evidence from './components/Evidence/Evidence';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
};

export default Home;
