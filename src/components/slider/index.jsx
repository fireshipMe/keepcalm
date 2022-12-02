/* eslint-disable max-len */
import React, {useEffect, useRef} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';

import 'swiper/swiper.min.css';

import {useWindowSize} from '../../hooks';

import {
  Container,
  Card,
  Title,
  FakeCard,
} from './styles';


import card1 from '../../assets/images/slider/andresvera1.jpg';
import card2 from '../../assets/images/slider/andresvera11.jpg';
import card3 from '../../assets/images/slider/andresvera12.jpg';
import card4 from '../../assets/images/slider/andresvera13.jpg';
import card5 from '../../assets/images/slider/andresvera14.jpg';
import card6 from '../../assets/images/slider/andresvera15.jpg';
import card7 from '../../assets/images/slider/andresvera16.jpg';
import card8 from '../../assets/images/slider/andresvera17.jpg';


const Slider = () => {
  const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
  ];

  const {width} = useWindowSize();
  const isMobile = width < 420;

  const swiper = useRef();

  const handleScroll = () => {
    const offset = swiper.current.getBoundingClientRect().top;
    const minimum = 107; // -100
    const maximum = 500; // 600
    const normalized = (offset - minimum)/(maximum - minimum); // Normalizing range so [50,500] => [0,1]
    if (normalized >= 0 && normalized <= 1) {
      swiper.current.swiper.setProgress(1 - normalized);
    }
  };

  useEffect(() => {
    console.log(isMobile);
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
      swiper.current.swiper.update();
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <Title>Lorem ipsum dolor sit amet</Title>
      <Swiper
        ref={swiper}
        slidesPerView={isMobile ? 2 : 5}
        spaceBetween={40}
        direction='horizontal'
        freeMode={true}
        mousewheel={false}
        // width={'1500'}
        modules={[FreeMode]}
        allowTouchMove={true}
        observer={true}
      >
        <Container>
          {cards.map((el) => (
            <SwiperSlide key={el}>
              <Card
                key={el}
                style={{
                  backgroundImage: `url(${el})`,
                }}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <FakeCard/>
          </SwiperSlide>
          { isMobile ?
          <SwiperSlide>
            <FakeCard/>
          </SwiperSlide> : null}
        </Container>
      </Swiper>

    </>
  );
};

export default Slider;
