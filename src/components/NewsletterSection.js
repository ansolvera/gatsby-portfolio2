import * as React from 'react'
import styled from 'styled-components'
import { Section } from './Section'
import { Container } from './Container'

const NewsletterSection = () => {
    return (
        <BlueSection large="true">
            <Container>
                <NewsletterHelmet>

                        <NewsletterHeading>Sign up for my email list</NewsletterHeading>
                        <NewsletterSubheading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu elit. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. Vivamus leo ex, venenatis eu mattis a, maximus in turpis. </NewsletterSubheading>

                    
                        <NewsletterForm>
                            <NewsletterInput type="text" placeholder="name@example.com"/>
                            <NewsletterButton type="submit" value="Submit" />
                        </NewsletterForm>
                        <NewsletterDisclaimer>I won't send you spam. Promise.</NewsletterDisclaimer>

                </NewsletterHelmet>
            </Container>
        </BlueSection>
    )
}

export default NewsletterSection

const BlueSection = styled(Section)`
    background-image: linear-gradient(to bottom, var(--teal-400), var(--blue-400));
    overflow: hidden;

    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0; left: 0;
        width: 100vw; height: 10rem;
        transform: skewY(-2deg);
        z-index: 50;    
    }

    &::before {
        top: -5rem; 
        background-color: var(--gray-50);
    }

    &::after {
        bottom: -5rem;
        background-color: var(--white);
    }

`

const NewsletterHelmet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 5rem 0;
    max-width: 35.625rem;
    text-align: center;

    @media screen and (min-width: 64rem) {
        padding: 2.5rem 0;
    }

`

/* const NewsletterLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 64rem) {
        align-items: flex-start;
        margin-bottom: 0;
        padding-right: 2.5rem;
    }

` */

const NewsletterHeading = styled.h2`
    margin-bottom: 1.25rem;
    color: var(--white);
`

const NewsletterSubheading = styled.p`
    margin-bottom: 2.5rem;
    color: var(--gray-300);
    text-align: center;

    /* @media screen and (min-width: 64rem) {
        text-align: start;
    } */

`

/* const NewsletterRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 64rem) {
        justify-content: center;
        align-items: flex-end;
    }

` */

const NewsletterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    width: 75%;

    @media screen and (min-width: 64rem) {
        flex-direction: row;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    }

`

const NewsletterInput = styled.input`
    margin-bottom: 1.25rem;
    width: 100%; height: 3.5rem;
    padding: 0 1.25rem;
    border: 1px solid var(--gray-100);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    font-size: 1rem;
    font-weight: 500;
    color: var(--blue-400);

    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 1rem;
        font-weight: 500;
        color: var(--gray-300);
    }

    @media screen and (min-width: 64rem) {
        margin-bottom: 0;
        width: 65%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: none;
    }

`

const NewsletterButton = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%; height: 3.5rem;
    padding: 0 1.25rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    background-color: var(--gray-900);
    color: #fff;
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--gray-800);
    }

    @media screen and (min-width: 64rem) {
        width: 35%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        box-shadow: none;
    }

`

const NewsletterDisclaimer = styled.p`
    margin: 0 auto;
    width: 23.125rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--gray-300);
    text-align: center;
`