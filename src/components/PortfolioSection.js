import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Section } from './Section'
import { Container } from './Container'
import { FaExternalLinkAlt } from 'react-icons/fa'
import RoamCard from '../images/roam-card.webp'

const PortfolioSection = () => {
    return (
        <Section>
            <PortfolioContainer>
                <Eyebrow>Portfolio</Eyebrow>
                <PortfolioHelmet>
                    <PortfolioHeading>Check out some of my past <BlueSpan>projects</BlueSpan></PortfolioHeading>
                    <PortfolioSubheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu elit. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. Integer a metus a quam ullamcorper consectetur rutrum non sapien. Morbi eu ex sagittis, porttitor magna suscipit, consectetur ligula. In venenatis posuere sodales.</PortfolioSubheading>
                </PortfolioHelmet>
                <PortfolioCarousel>
                    <PortfolioCarouselItem img={RoamCard}>
                        <Overlay>
                            <OverlayLink href="/">View on Dribbble<ExtLink /></OverlayLink>  
                        </Overlay>
                    </PortfolioCarouselItem>
                    <PortfolioCarouselItem img={RoamCard}>
                        <Overlay>
                            <OverlayLink href="/">View on Dribbble<ExtLink /></OverlayLink>  
                        </Overlay>
                    </PortfolioCarouselItem>
                    <PortfolioCarouselItem img={RoamCard}>
                        <Overlay>
                            <OverlayLink href="/">View on Dribbble<ExtLink /></OverlayLink>  
                        </Overlay>
                    </PortfolioCarouselItem>
                </PortfolioCarousel>
            </PortfolioContainer>
        </Section>
    )
}

export default PortfolioSection

const PortfolioContainer = styled(Container)`

    @media screen and (min-width: 64rem) {
        overflow-x: visible;
    }

`

const Eyebrow = styled.p`
    margin-bottom: 0.875rem;
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    color: var(--gray-400);
`

const PortfolioHelmet = styled.div`
    max-width: 48.125rem;
    margin-bottom: 5rem;
`

const PortfolioHeading = styled.h2`
    margin-bottom: 2.5rem;
`

const BlueSpan = styled.span`
    color: var(--blue-400);
`

const PortfolioSubheading = styled.p`
    margin-bottom: 2.5rem;
    max-width: 60.625rem;
`
const HorizontalScroll = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-50%, 0);
    }
`

const PortfolioCarousel = styled.div`
    
    @media screen and (min-width: 64rem) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 200vw;
        margin-left: -50vw;
        animation: ${ HorizontalScroll } 60s linear infinite;

        &:hover {
            animation-play-state: paused;
        }

    }

`

const ShowOverlay = keyframes`
    0% {
        visibility: hidden;
        opacity: 0;
        transform: scale(0.5);
    }
    1% {
        visibility: visible;
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        visibility: visible;
        opacity: 0.9;
        transform: scale(1.0);
    }
`

const Overlay = styled.div`
    visibility: hidden;
    opacity: 0;
    transform: scale(0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%; height: 100%;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: var(--white);
    backdrop-filter: blur(4px) saturate(110%);
`

const OverlayLink = styled.a`
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 700;
    color: var(--gray-500);
    text-decoration: none;
`

const ExtLink = styled(FaExternalLinkAlt)`
    margin-left: 0.5rem;
    color: var(--gray-500);
`

const PortfolioCarouselItem = styled.div`
    position: relative;
    margin-bottom: 2.5rem;
    width: 100%; height: 26.25rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 0.25rem;
    background-image: url(${ props => props.img });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    overflow: hidden;

    &:hover {

        > div {
            animation: ${ ShowOverlay } 0.3s linear forwards;
        }

    }

    @media screen and (min-width: 64rem) {
        margin: 0 0.9375rem;
        max-width: 21.875rem;
        width: 25vw; height: 31.25rem;
    }

`