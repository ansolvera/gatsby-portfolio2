import * as React from 'react' 
import styled from 'styled-components'
import { NavAvatar as Avatar } from './Header'

const Testimonial = ( props ) => {
    return (
        <TestimonialWrapper>
            <TestimonialComment>"{ props.comment }"</TestimonialComment>
            <TestimonialBottom>
                <Avatar src={ props.client.avatarURL} alt={ props.client.name }/>
                <TestimonialRight>  
                    <TestimonialName>{ props.client.name }</TestimonialName>
                    <TestimonialCompany>{ props.client.company }</TestimonialCompany>
                </TestimonialRight>
            </TestimonialBottom>
        </TestimonialWrapper>
    )
}

export default Testimonial

const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

const TestimonialComment = styled.p`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
`

const TestimonialBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const TestimonialRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TestimonialName = styled.p`
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 600;
    color: var(--gray-900);
`

const TestimonialCompany = styled.p`
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 500;
    color: var(--gray-300);
`

