import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation().pathname === '/';

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink to="/" activeClassName={location ? 'selected' : ''}>Listagem</NavLink>

          <NavLink to="import" activeClassName='selected' >Importar</NavLink>
        </nav>
      </header>
    </Container>
  )
};

export default Header;
