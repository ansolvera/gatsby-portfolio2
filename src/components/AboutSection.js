import * as React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Section } from './Section';

const AboutSection = () => {
    return (
        <ContentSection>
            <AboutContainer>
                <Eyebrow>JAMstack</Eyebrow>
                <AboutHeading>You deserve a <BlueSpan>modern, fast, scalable</BlueSpan> website.</AboutHeading>
                <AboutCopyWrapper>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu elit. Vivamus leo ex, venenatis eu mattis a, maximus in turpis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu elit. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. Suspendisse potenti. Duis malesuada neque vitae est euismod, et viverra urna eleifend. Sed molestie felis eget est rhoncus, vitae sagittis quam aliquet. Aenean sed ligula odio. Praesent at ligula quis dolor luctus suscipit sed non velit. Sed volutpat, tortor et sodales rutrum, libero dui hendrerit tellus, sit amet lacinia velit massa sit amet velit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu elit. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. Integer a metus a quam ullamcorper consectetur rutrum non sapien. Morbi eu ex sagittis, porttitor magna suscipit, consectetur ligula. In venenatis posuere sodales.</p>
                </AboutCopyWrapper>
            </AboutContainer>
        </ContentSection>
    )
}

export default AboutSection

const ContentSection = styled(Section)`

        &::before {
        content: '';
        display: block;
        position: absolute;
        right: 0; bottom: -5rem; left: 0;
        width: 100vw; height: 10rem;
        background-color: var(--white);
        transform: skewY(-2deg);
        z-index: 50;    
    }

`

const AboutContainer = styled(Container)`
    padding-bottom: 2.5rem;

    @media screen and (min-width: 64rem) {
        max-width: 48rem;
        margin: 0 auto;
    }

`

const Eyebrow = styled.p`
    margin-bottom: 0.875rem;
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    color: var(--gray-400);
`

const AboutHeading = styled.h2`
    margin-bottom: 2.5rem;
`

const BlueSpan = styled.span`
    color: var(--blue-400);
`

const AboutCopyWrapper = styled.div`

    p {
        margin-bottom: 1.25rem;

        &:last-of-type {
            margin-bottom: 0;
        }

    }
`