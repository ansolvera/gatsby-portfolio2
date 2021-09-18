import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModalOpen(true);
    }, 3000)
}, [3000]);
    return (
        <>
            {modalOpen? (
                <ModalWrapper>
                    <ModalBody>
                        <ModalLeft></ModalLeft>
                        <ModalRight>
                            <ModalHeading>Want me to just build your website?</ModalHeading>
                            <ModalSubheading>I get it. Click on the button below, and let's schedule some time to chat.</ModalSubheading>
                            <Button as="button" primary="true">Start now</Button>
                            <Button as="button" onClick={() => setModalOpen(false)}>No, thanks</Button>
                        </ModalRight>
                    </ModalBody>
                </ModalWrapper>
            ) : null}
        </>
    )
}

export default Modal

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0; right: 0; bottom: 0; left: 0;
    display: grid;
    place-items: center;
    width: 100vw; height: 100vh;
    background-color: rgba(249,250,251, 0.85);
    backdrop-filter: blur(10px) saturate(110%);
    overflow: hidden;
`

const ModalBody = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    width: 90%; height: auto;
    max-width: 60.625rem;
    border-radius: 0.5rem;
    background-color: var(--white);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    overflow: hidden;

    @media screen and (min-width: 64rem) {
        grid-template-rows: none;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

`

const ModalLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: radial-gradient(farthest-corner at 2.5rem 2.5rem, var(--teal-400) 0%, var(--blue-400) 100%);
    overflow: hidden;

    &::before {
        display: block;
        content: '';
        position: absolute;
        top: 0; bottom: 0; right: -5rem;
        width: 10rem; height: 100%;
        background-color: var(--white);
        transform: skewX(10deg);
        z-index: 100;
    }

`

const ModalRight = styled.div`
    padding: 3.75rem;

    @media screen and (min-width: 64rem) {
        padding: 7.5rem 3.75rem;
    }

`

const ModalHeading = styled.h2`
    margin-bottom: 1.25rem;
`

const ModalSubheading = styled.p`
    margin-bottom: 2.5rem;
`