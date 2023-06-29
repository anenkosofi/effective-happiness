import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Pathname } from '@types';

type LogoProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Logo: FC<LogoProps> = ({ icon: Icon }) => {
  return (
    <Link to={Pathname.COURSES} className="logo">
      <Icon />
    </Link>
  );
};

export default Logo;
