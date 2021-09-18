import * as React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Button } from './Button'
import { Section } from './Section'

const HeroSection = () => {
    return (
        <>
            <Section large="true">
                <Container>
                    <HeroMobileImg></HeroMobileImg>
                    <HeroLeft>
                        <Eyebrow>Alex Sanchez</Eyebrow>
                        <HeroHeading>I build cool stuff <br/>on the <BlueSpan>internet.</BlueSpan></HeroHeading>
                        <HeroSubheading>More specifically, I create beautiful <PinkSpan>JAMstack</PinkSpan> websites and serverless web applications for SMBs, startups, and nonprofits.</HeroSubheading>
                        <Button primary="true">Start now</Button>
                        <Button>Learn more</Button>
                    </HeroLeft>
                    <HeroRight>

                    </HeroRight>
                </Container>
            </Section>
        </>
    )
}

export default HeroSection

const HeroMobileImg = styled.img`
    display: block;
    margin-bottom: 2.5rem;
    width: 100%; height: 26.25rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 64rem) {
        display: none;
    }

`

const HeroLeft = styled.div`

    @media screen and (min-width: 64rem) {
        width: 50%;
    }
`

const Eyebrow = styled.p`
    margin-bottom: 0.875rem;
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    color: var(--gray-400);
`

const HeroHeading = styled.h1`
    margin-bottom: 1.25rem;

    @media screen and (min-width: 64rem) {
        margin-bottom: 2.5rem;
    }

`

const BlueSpan = styled.span`
    color: var(--blue-400);
`

const HeroSubheading = styled.p`
    margin-bottom: 2.5rem;
`

const PinkSpan = styled.span`
    font-weight: 700;
    color: #e7017a;
`

const HeroRight = styled.div`
    display: none;

    @media screen and (min-width: 64rem) {
        display: block;
        position: absolute;
        top: 0; right: 0; bottom: 0;
        width: 45%; height: 100%;
        background-image: radial-gradient(farthest-side at 2.5rem 2.5rem, var(--teal-400) 0%, var(--blue-400) 100%);

        &::before {
            display: block;
            content: '';
            position: absolute;
            top: 0; bottom: 0; left: -5rem;
            width: 10rem; height: 100%;
            background-color: var(--white);
            transform: skewX(-10deg);
            z-index: 50;
        }

    }

`