import React from 'react';
import {
  Nav,
  NavTop,
  NavItem,
  Logo,
  SearchContainer,
  SearchInput,
  SearchIcon,
  HeaderActions,
  LoginButton,
  CartButton,
  CartIcon,
  LimitedOffer,
  NavBottom,
  MenuItem
} from './styled/HeaderStyles';

const Header = () => {
  return (
    <Nav>
      <NavTop>
        <NavItem>
          <a href="/">
            <Logo src="./img/sneakers.png" alt="Nike Store" />
          </a>
        </NavItem>
        <NavItem flex="1" margin="0 40px">
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchIcon src="./img/search.png" width="20" height="20" alt="Search" />
          </SearchContainer>
        </NavItem>
        <HeaderActions>
          <LoginButton href="/login">Login</LoginButton>
          <CartButton href="/cart">
            <CartIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </CartIcon>
            Cart
          </CartButton>
          <LimitedOffer>Limited Offer!</LimitedOffer>
        </HeaderActions>
      </NavTop>
      <NavBottom>
        <MenuItem>AIR FORCE</MenuItem>
        <MenuItem>JORDAN</MenuItem>
        <MenuItem>BLAZER</MenuItem>
        <MenuItem>CRATER</MenuItem>
        <MenuItem>HIPPIE</MenuItem>
      </NavBottom>
    </Nav>
  );
};

export default Header; 