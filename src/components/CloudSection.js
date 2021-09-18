import * as React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import ariLogo from '../images/ari.svg'
import mhLogo from '../images/hussey.svg'
import gtgLogo from '../images/gtg.svg'
import miraseeLogo from '../images/mirasee.svg'
import ruzukuLogo from '../images/ruzuku.svg'
import { Button } from './Button'
import { Section } from './Section'

const CloudSection = () => {
    return(
        <>
            <Section small="true">
                <CloudContainer>
                    <CloudLeft>
                        <CloudHeading>Trusted by some of the web's top brands:</CloudHeading>
                    </CloudLeft>
                    <CloudRight>
                        <CloudLogo src={ ariLogo } large ="true" />
                        <CloudLogo src={ mhLogo } />
                        <CloudLogo src={ gtgLogo } small="true" />
                        <CloudLogo src={ miraseeLogo } small="true" />
                        <CloudLogo src={ ruzukuLogo } xsmall="true" />
                        <CloudLogo src={ ruzukuLogo } xsmall="true" />
                    </CloudRight>
                    <CloudButton primary="true">Start now</CloudButton>
                </CloudContainer>
            </Section>
        </>
    )
}

export default CloudSection

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
    position: relative;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 700;
    color: var(--gray-500);
    letter-spacing: 0.0625rem;
    text-transform: uppercase;

    ::before, ::after {
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 20vw; height: 1px;
        background-color: var(--gray-100);
    }

    ::before {
        right: 100%;
        margin-right: 1.25rem;
    }

    ::after {
        left: 100%;
        margin-left: 1.25rem;
    }
`

const CloudRight = styled.div`
    display: grid;
    column-gap: 5rem;
    row-gap: 2.5rem;
    place-items: center;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 2.5rem;

    @media screen and (min-width: 64rem) {
        grid-template-rows: none;
        grid-template-columns: repeat(6, minmax(0, min-content));
        row-gap: 0;
    }
`

const CloudLogo = styled.img`
    display: inline-block;
    width: auto; height: ${ props => props.xsmall ? '1.75rem' : props.small ? '2rem' : props.large ? '2.75rem' : '2.5rem'};

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }

`

const CloudButton = styled(Button)`
    position: relative;

    ::before, ::after {
        content: '';
        position: absolute;
        top: 50%;
        display: block;
        width: 20vw; height: 1px;
        background-color: var(--gray-100);
    }

    ::before {
        right: 100%;
        margin-right: 1.25rem;
    }

    ::after {
        left: 100%;
        margin-left: 1.25rem;
    }
`