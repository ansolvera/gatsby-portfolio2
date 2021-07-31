import * as React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import ariLogo from '../images/ari.svg'
import mhLogo from '../images/hussey.svg'
import gtgLogo from '../images/gtg.svg'
import miraseeLogo from '../images/mirasee.svg'
import ruzukuLogo from '../images/ruzuku.svg'

const CloudSection = () => {
    return(
        <Section>
            <CloudContainer>
                <CloudLeft>
                    <CloudHeading>Trusted by some of the web's top brands:</CloudHeading>
                </CloudLeft>
                <CloudRight>
                    <CloudLogo src={ ariLogo } large="true" />
                    <CloudLogo src={ mhLogo } />
                    <CloudLogo src={ gtgLogo } small="true" />
                    <CloudLogo src={ miraseeLogo } />
                    <CloudLogo src={ ruzukuLogo } small="true" />
                </CloudRight>
            </CloudContainer>
        </Section>
    )
}

export default CloudSection

const Section = styled.section`
    padding: 5rem 0;
    background-color: #f9fafb;
`

const CloudContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CloudLeft = styled.div`
    margin-bottom: 2.5rem;
    text-align: center;
`

const CloudHeading = styled.h2`
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 500;
    color: #374151;
`

const CloudRight = styled.div`
    display: grid;
    column-gap: 5rem;
    row-gap: 2.5rem;
    place-items: center;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media screen and (min-width: 64rem) {
        grid-template-rows: repeat(1, minmax(0, 1fr));
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
`

const CloudLogo = styled.img`
    display: inline-block;
    width: auto; height: ${ props =>  props.small ? '2.25rem' : props.large ? '3.75rem' : '3rem'};
    vertical-align: middle;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }

`