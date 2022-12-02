import React from 'react';

import logo from '../../assets/logo.svg';
import logoMobile from '../../assets/logoMobile.svg';
import phone from '../../assets/icons/phone.svg';
import {useWindowSize} from '../../hooks';

import {
  HeaderContainer,
  PhoneContainer,
} from './styles';

const Header = () => {
  const {width} = useWindowSize();
  const isMobile = width < 420 ? true : false;
  return (
    <HeaderContainer>
      <img src={isMobile ? logoMobile : logo}/>
      <PhoneContainer>
        {isMobile ? <img src={phone} /> : '+7 (495) 495-49-54' }
      </PhoneContainer>
    </HeaderContainer>
  );
};

export default Header;
