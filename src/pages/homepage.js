import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import BrandsLove from '../components/BrandsLove';
import WindowPeak from '../components/WindowPeak';


const HomePage = () => {
  return (
    <>
      <Header /> 
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <div className='non-mobile'>
        <WindowPeak />
      </div>
      <CredSecurity />

    </>
  );
};

export default HomePage;