import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {

    return (
        <Container>
            <Logo>kim</Logo>
            <Gnb>
                <Nav>
                    <NavItem>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/search/photos'}>Search</NavLink>
                    </NavItem>
                </Nav>

                <ButtonMenu>
                    <AiOutlineMenu/>
                </ButtonMenu>
            </Gnb>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 50px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  text-transform: uppercase;
  
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
  
`;

const Nav = styled.div`
  display: flex;
`;

const NavItem = styled.div`

`;

const NavLink = styled(Link)`
  display: flex;
  height: 70px;
  align-items: center;
  padding: 0 20px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  
`;

const ButtonMenu = styled.div`
  margin-left: 30px;
  display: flex;
  font-size: 22px;
`;
export default Header;