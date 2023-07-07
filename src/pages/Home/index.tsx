import React, { FC } from 'react';

import { ReactComponent as Light } from '@assets/light.svg';
import { ReactComponent as Steps } from '@assets/steps.svg';
import { ReactComponent as Superhero } from '@assets/superhero.svg';
import Container from '@components/Container';
import FeedbackCarousel from '@components/FeedbackCarousel';
import { steps, plan } from '@constants';
import { useWindowSize } from '@hooks';

import './Home.scss';

const Home: FC = () => {
  const [width] = useWindowSize();

  const getPlanMarkup = (text: string, index: number) =>
    index === 3 ? (
      <p className="plan__text">
        {text.slice(0, -13)}
        <b>{text.slice(-13)}</b>
      </p>
    ) : (
      <p className="plan__text">
        <b>{index === 0 || index === 2 || index === 4 ? text.slice(0, 12) : text.slice(0, 16)}</b>
        {index === 0 || index === 2 || index === 4 ? text.slice(12) : text.slice(16)}
      </p>
    );

  return (
    <>
      <section className="greeting">
        <Container>
          <div className="superhero__container">
            <div className="superhero__content">
              <h1 className="superhero__heading">
                Eliminate procrastination with your Personal Plan
              </h1>
              <div className="superhero__mobile-thumb">
                <Superhero className="superhero__image" />
              </div>
              <p className="superhero__description">
                Stop putting off tasks. Achieve more in less time
              </p>
              <button type="button" className="superhero__button">
                Get started
              </button>
            </div>
            <div className="superhero__desktop-thumb">
              <Superhero className="superhero__image" />
            </div>
          </div>
          <div className="feedback__container">
            <h2 className="feedback__heading">
              Join <span className="feedback__heading_colored">10 000+</span>
              {width > 600 ? ' happy users in your productivity journey' : ' happy users'}
            </h2>
            <FeedbackCarousel />
          </div>
        </Container>
      </section>
      <section className="steps">
        <Container>
          <div className="steps__content">
            <h2 className="steps__heading">
              Step-by-step solution to beat procrastination once for all
            </h2>
            <div className="steps__description">
              <ul className="steps__list">
                {steps.map(({ icon: Icon, text }, index) => (
                  <li key={index} className="steps__item">
                    <div className="steps__icon-thumb">
                      <Icon />
                    </div>
                    <p className="steps__text">{text}</p>
                  </li>
                ))}
              </ul>
              <div className="steps__thumb">
                <Steps className="steps__image" />
              </div>
            </div>
            <button type="button" className="steps__button">
              TRY NOW
            </button>
          </div>
        </Container>
      </section>
      <section className="plan">
        <Container>
          <div className="plan__container">
            <div className="plan__content">
              <h2 className="plan__heading">Personal plan includes:</h2>
              <div className="plan__mobile-thumb">
                <Light className="plan__image" />
              </div>
              <ul className="plan__list">
                {plan.map(({ icon: Icon, text }, index) => (
                  <li key={index} className="plan__item">
                    <div className="plan__icon-thumb">
                      <Icon className="plan__icon" />
                    </div>
                    {getPlanMarkup(text, index)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="plan__desktop-thumb">
              <Light className="plan__image" />
            </div>
          </div>
          <button type="button" className="plan__button">
            TRY NOW
          </button>
        </Container>
      </section>
    </>
  );
};

export default Home;
