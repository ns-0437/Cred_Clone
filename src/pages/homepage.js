import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import CredStory from '../components/CredStory';
import BrandsLove from '../components/BrandsLove';
import WindowPeak from '../components/WindowPeak';
import MobileScroll from '../components/MobileScroll';
import AppRating from '../components/AppRating';


const HomePage = () => {
  return (
    <>
      <Header /> 
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
    </>
  );
};

export default HomePage;