import * as React from 'react'
import styled from 'styled-components'

export const Section = styled.section`
    position: relative;
    padding: ${ props => props.large ? '7.5rem' : props.small ? '2.5rem' : '3.75rem'} 0;
    background-color: ${ props => props.gray? 'var(--gray-50)' : 'var(--white)'};

    @media screen and (min-width: 64rem) {
        padding: ${ props => props.large ? '15rem' : props.small ? '5rem' : '7.5rem'} 0;
    }

`