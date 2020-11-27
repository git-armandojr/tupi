import React, { Fragment } from 'react';
import { Logo, HeaderContainer } from './styles';
import Icone from '../../assets/icon.png';

function Header(props) {
  return (
    <>
      <HeaderContainer>
        <Logo src={Icone} alt='Tupi - Encurtador de URL' />
        <h1>Tupi</h1>
        <p>{props.children}</p>
      </HeaderContainer>
    </>
  );
}

export default Header;
