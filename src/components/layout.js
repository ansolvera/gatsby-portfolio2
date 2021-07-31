import * as React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { GlobalStyle } from '../styles/GlobalStyles.js'

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Header />
        <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  margin-top: 3.75rem;
`
