import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 5%;
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.margin && `margin: ${props.margin};`}
`;

export const Logo = styled.img`
  height: 35px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
  margin: 0 40px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 20px;
  border: 2px solid #eee;
  border-radius: 30px;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #333;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const LoginButton = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #eee;
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #ddd;
  }
`;

export const CartButton = styled.a`
  background: #000;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
`;

export const CartIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const LimitedOffer = styled.span`
  font-weight: 600;
  color: #ff4444;
`;

export const NavBottom = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px 0;
  border-top: 1px solid #eee;
`;

export const MenuItem = styled.h3`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff4444;
  }
`; 