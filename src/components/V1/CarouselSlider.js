import React, { useState } from 'react';
import { CarouselData } from './CarouselData';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const CarouselSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
      {CarouselData.map((s, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={s.image} alt='travel images' className='pic' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CarouselSlider;
