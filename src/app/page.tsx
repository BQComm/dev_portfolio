'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Front from './components/front';
import AboutMe from './components/about_me'
import Works from './components/works';
import Contacts from './components/contacts'
import Footer from './components/footer';

const Home: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<string>('Front');

  const handleNavbarItemClick = (item: string) => {
    setCurrentComponent(item);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'about_me':
        return <AboutMe />;
      case 'works':
        return <Works />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Front />;
    }
  };

  return (
    <AnimatePresence>
      <motion.div transition={{
      ease: "linear",
      duration: 2,
      x: { duration: 1 }
      }}>
      <div className='bg-seashell'>
        <Navbar onClickItem={handleNavbarItemClick} />
          {renderComponent()}
        <Footer />
      </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
