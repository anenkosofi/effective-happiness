import React, { FC } from 'react';

import { ReactComponent as LogoImage } from '@assets/dark-logo.svg';
import Container from '@components/Container';
import Logo from '@components/Logo';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__container">
          <Logo icon={LogoImage} />
          <button type="button" className="header__button">
            Sign In
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
