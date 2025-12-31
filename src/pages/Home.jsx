import React, { useEffect } from 'react';
import TopbarWhite from '../components/Topbar/Topbar-White';
import TopbarPurple from '../components/Topbar/Topbar-Purple';
import Enquire from '../components/Enquire/Enquire';
import Legacy from '../components/Legacy/Legacy';
import Choose from '../components/Choose/Choose';
import Schedule from '../components/Schedule/Schedule';
import Exhibition from '../components/Exhibition/Exhibition';
import Footer from '../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add('is-scrolled');
      } else {
        document.body.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <TopbarWhite />
      <TopbarPurple />
      <main className="page-content">
        <Enquire />
        <Legacy/>
        <Choose/>
        <Schedule/>
        <Exhibition/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
