import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Container } from './Container'
import Avatar from '../images/avatar.webp'

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <NavBrand to="/">
            <NavLogo src ={ Logo } />
          </NavBrand>
          <NavMenu>
            { menuData.map((item, index) => (
              <NavLink to ={ item.link } key={ index }>{ item.title }</NavLink>
            )) }
          </NavMenu>
        </NavLeft>
        <NavHamburger>
          <Bars />
        </NavHamburger>
        <NavCta>
          <NavAvatar src={ Avatar } />
          <NavCopy>Start now</NavCopy>
        </NavCta>
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
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(4px) saturate(110%);
`

const NavContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const NavBrand = styled(Link)`
  display: grid;
  place-items: center;
  height: 100%;
`

const NavHamburger = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  height: 100%;
  border-radius: 50vw;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-100);
  }

  @media screen and (min-width: 64rem) {
    display: none;
  }
`

const NavLogo = styled.img`
  margin-right: 1.25rem;
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
  color: var(--gray-500);
`

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 64rem) {
    display: none;
  }
`

const NavAvatar = styled.img`
  margin-right: 0.5rem;
  width: 2rem; height: 2rem;
  border-radius: 50vw;
`

const NavCta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.25rem;
  border-radius: 50vw;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--gray-100);
  }

  @media screen and (max-width: 64rem) {
    display: none;
  }

`

const NavCopy = styled.p`
  padding-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--blue-400);
`