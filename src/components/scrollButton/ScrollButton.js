import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';
import './ScrollButtonStyles.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="button">
      <Button>
        <FaArrowCircleUp
          onClick={scrollTop}
          style={{ display: visible ? 'inline' : 'none' }}
        />
      </Button>
    </div>
  );
};

export default ScrollButton;
