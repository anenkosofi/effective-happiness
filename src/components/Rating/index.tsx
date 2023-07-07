import React, { FC } from 'react';

import { ReactComponent as Star } from '@assets/star.svg';

import './Rating.scss';

type RatingProps = {
  rating: number;
};

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <ul className="rating__list">
      {[...Array(rating)].map((_, index) => (
        <li key={index} className="rating__item">
          <Star className="rating__icon" />
        </li>
      ))}
      {rating < 5 &&
        [...Array(5 - rating)].map((_, index) => (
          <li key={index} className="rating__item">
            <Star className="rating__icon rating__icon_empty" />
          </li>
        ))}
    </ul>
  );
};

export default Rating;
