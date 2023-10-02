import React, { useEffect, useState, useRef } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false); // Changed state variable name

  const ref = useRef(null);

  const toggleAnimation = (entries) => {
    if (entries[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [showAnimation, options]);

  return (
    <div className={`product-showcase ${showAnimation ? 'scale-in-bottom' : ''}`} ref={ref}>
      {console.log(showAnimation)}
      { showAnimation && ( 
      <div className='showcase-wrapper'>
            <img 
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui showcase-mockup-1" alt=" "
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui showcase-mockup-2" alt=" "
            />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui showcase-mockup-3" alt=" "
            />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui showcase-mockup-4" alt=" "
            />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui showcase-mockup-5" alt=" "
            />
        </div>
         )}
    </div>
  );
}; 

export default ProductShowcase;