import * as React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Button } from './Button'

const HeroSection = () => {
    return (
        <Section>
            <Container>
                <HeroLeft>
                    <HeroHeading>I build things on the <BlueSpan>internet.</BlueSpan></HeroHeading>
                    <HeroSubheading>More specifically, I create beautiful <PinkSpan>JAMstack</PinkSpan> websites and serverless web applications for SMBs, startups, and nonprofits.</HeroSubheading>
                    <Button primary="true">Start now</Button>
                    <Button>Learn more</Button>
                </HeroLeft>
            </Container>
        </Section>
    )
}

export default HeroSection

const Section = styled.section`
    position: relative;
    padding: 5rem 0;

    @media screen and (min-width: 64rem) {
        padding: 10rem 0;
    }

`

const HeroLeft = styled.div`

    @media screen and (min-width: 64rem) {
        width: 50%;
    }
`

const HeroHeading = styled.h1`
    margin-bottom: 2.5rem;
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 800;
    color: #111827;

    @media screen and (min-width: 64rem) {
        font-size: 4.5rem;
    }
`

const BlueSpan = styled.span`
    color: #0a7aff;
`

const HeroSubheading = styled.p`
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    line-height: 1.67;
    color: #6b7280;
`

const PinkSpan = styled.span`
    font-weight: 700;
    color: #e7017a;
`