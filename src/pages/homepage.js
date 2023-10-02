import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';


const HomePage = () => {
  return (
    <>
      <Header /> 
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
    </>
  );
};

export default HomePage;