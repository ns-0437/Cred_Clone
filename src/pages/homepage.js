import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';

const HomePage = () => {
  return (
    <>
      <Header /> 
      <HeroSection />
      <ProductShowcase />
    </>
  );
};

export default HomePage;