import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from '@components/Rating';
import { feedbacks } from '@constants';

import 'swiper/css';

const FeedbackCarousel: FC = () => {
  const swiperParams = {
    spaceBetween: 24,
    slidesPerView: 'auto',
    loop: true,
    grabCursor: true,
  };

  return (
    <Swiper className="feedback__carousel" {...swiperParams}>
      <ul className="feedback__list">
        {feedbacks.map(({ rating, text, author }, index) => (
          <SwiperSlide key={index}>
            <li className="feedback__item">
              <Rating rating={rating} />
              <p className="feedback__text">{text}</p>
              <p className="feedback__author">{author}</p>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default FeedbackCarousel;
