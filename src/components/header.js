import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Container } from './Container'

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <NavBrand to="/">
          <NavLogo src ={ Logo } />
        </NavBrand>
        <Bars />
        <NavMenu>
          { menuData.map((item, index) => (
            <NavLink to ={ item.link } key={ index }>{ item.title }</NavLink>
          )) }
        </NavMenu>
        <NavButton primary="true">Get started</NavButton>
      </NavContainer>
    </Nav>  
  )
}

export default Header

const Nav = styled.nav`
  position: fixed;
  top: 0; right: 0; left: 0;
  z-index: 900;
  display: grid;
  place-items: center;
  box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
  height: 3.75rem;
  background: transparent;
`

const NavContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavBrand = styled(Link)`
  display: grid;
  place-items: center;
  height: 100%;
`

const NavLogo = styled.img`
  width: 2.5rem; height: 2.5rem;
`

const NavLink = styled(Link)`
  color: #9ca3af;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  padding: 0 1.25rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0a7aff;
  }

`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0; right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled(Button)`
  font-size: 0.875rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    display: none;
  }

`