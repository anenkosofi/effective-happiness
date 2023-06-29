import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImage } from '@assets/light-logo.svg';
import Container from '@components/Container';
import Logo from '@components/Logo';
import { companyLinks, appLinks, socialLinks, paymentLinks } from '@constants';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__content">
            <Logo icon={LogoImage} />
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__heading">Company</h3>
                <ul className="footer__company-list">
                  {companyLinks.map(({ href, text }) => (
                    <li key={href} className="footer__company-item">
                      <Link to={href} className="footer__company-link">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="footer__item">
                <h3 className="footer__heading">Download our app</h3>
                <ul className="footer__app-list">
                  {appLinks.map(({ href, icon: Icon }) => (
                    <li key={href} className="footer__app-item">
                      <Link to={href} className="footer__app-link">
                        <Icon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="footer__item">
                <h3 className="footer__heading">Follow us</h3>
                <ul className="footer__social-list">
                  {socialLinks.map(({ href, icon: Icon }) => (
                    <li key={href} className="footer__social-item">
                      <Link to={href} className="footer__social-link">
                        <Icon size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="footer__item">
                <h3 className="footer__heading">We accept payments</h3>
                <ul className="footer__payment-list">
                  {paymentLinks.map(({ icon: Icon }, index) => (
                    <li key={index} className="footer__payment-item">
                      <Icon />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer__address">
            <p className="footer__company">Koflimin Limited </p>
            <address className="footer__location">
              26 Stavrou Street, Strovolos 2034, Nicosia
            </address>
          </div>
        </div>
      </Container>
      <div className="footer__rights">
        <Container>
          <p>&#169; 2023 Wisey. All rights reserved</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
