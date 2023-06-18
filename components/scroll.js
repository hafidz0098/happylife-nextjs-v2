import { useState, useEffect } from 'react';

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-top-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      &#x1F815;
    </button>
  );
};

export default ScrollTopButton;
