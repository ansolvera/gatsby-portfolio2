import * as React from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { Section } from './Section';
import { Button } from './Button';

const FeatureSection = () => {
    return (
        <>
            <Section gray="true">
                <Container>
                    <FeatureGrid>
                        <FeatureLeft>
                            <Eyebrow>Fast</Eyebrow>
                            <FeatureHeading>Secure and blazing fast</FeatureHeading>
                            <FeatureCopyWrapper>
                                <p className="lead">Customer centric out of scope it is all exactly as i said, but i don't like it who's the goto on this job with the way forward. Customer centric out of scope it is all exactly as i said, but i don't like it who's the goto on this job.</p>
                                <p>Customer centric out of scope it is all exactly as i said, but i don't like it who's the goto on this job with the way forward. Customer centric out of scope it is all exactly as i said, but i don't like it who's the goto on this job.</p>
                            </FeatureCopyWrapper>
                            <Rule />
                            <FeatureLeftGrid></FeatureLeftGrid>
                            <Button>Learn more</Button>
                        </FeatureLeft>
                    </FeatureGrid>
                </Container>
            </Section>
        </>
    )
}

export default FeatureSection

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 1.875rem;

    @media screen and (min-width: 64rem) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(1, minmax(0, 1fr));
    }

`

const FeatureLeft = styled.div`
    padding-top: 10rem;
`

const Eyebrow = styled.p`
    margin-bottom: 0.875rem;
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    color: var(--gray-400);
`

const FeatureHeading = styled.h2`
    margin-bottom: 2.5rem;
`

const FeatureCopyWrapper = styled.div`
    margin-bottom: 1.25rem;

    @media screen and (min-width: 64rem) {
        margin-bottom: 2.5rem;
    }

    p:not(last-of-type) {
        margin-bottom: 1.25rem;
    }

`

const Rule = styled.hr`
    opacity: 0.25;
    margin-bottom: 1.25rem;
    border-color: var(--gray-50);

    @media screen and (min-width: 64rem) {
        margin-bottom: 2.5rem;
    }

`

const FeatureLeftGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 1.875rem;
    margin-bottom: 1.25rem;

    @media screen and (min-width: 64rem) {
        margin-bottom: 2.5rem;
    }

`