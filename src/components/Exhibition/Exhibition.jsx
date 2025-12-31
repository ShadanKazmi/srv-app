import React, { useRef } from 'react';
import './exhibition.css';

import icon1 from '../../assets/exhibit1.svg';
import icon2 from '../../assets/exhibit2.svg';
import icon3 from '../../assets/exhibit3.svg';
import icon4 from '../../assets/exhibit4.svg';

const Exhibition = () => {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;

    const cardWidth = 417 + 16; 
    trackRef.current.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="exhibition">
      <div className="exhibition__inner">

        <h2 className="exhibition__title">
          What Makes This Exhibition a Must-Visit
        </h2>

        <div className="exhibition__track-wrapper">
          <div
            className="exhibition__track"
            ref={trackRef}
            role="region"
            aria-label="Exhibition highlights slider"
          >
            <article className="exhibition__card">
              <img src={icon1} alt="" className="exhibition__icon" />
              <h3>Interact Directly with School Heads</h3>
              <p>Get answers straight from the experts</p>
            </article>

            <article className="exhibition__card">
              <img src={icon2} alt="" className="exhibition__icon" />
              <h3>Compare Curriculum & Pedagogy</h3>
              <p>Understand CBSE, ICSE, IB, Cambridge & more</p>
            </article>

            <article className="exhibition__card">
              <img src={icon3} alt="" className="exhibition__icon" />
              <h3>Exclusive Fee Structures & Offers</h3>
              <p>Access transparent information</p>
            </article>

            <article className="exhibition__card">
              <img src={icon4} alt="" className="exhibition__icon" />
              <h3>Explore School Offerings</h3>
              <p>Infrastructure, pedagogy & culture</p>
            </article>

            <article className="exhibition__card">
              <img src={icon4} alt="" className="exhibition__icon" />
              <h3>On-the-Spot Counselling</h3>
              <p>Save time with personalised guidance</p>
            </article>
          </div>
        </div>

        <div className="exhibition__nav">
          <button
            className="exhibition__nav-btn"
            aria-label="Previous slide"
            onClick={() => scroll('prev')}
          >
            ←
          </button>

          <button
            className="exhibition__nav-btn"
            aria-label="Next slide"
            onClick={() => scroll('next')}
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exhibition;
