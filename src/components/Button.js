import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    display: inline-block;
    transition: all 0.3s;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    border: ${ props => props.primary ? '1px solid #0a7aff' : '1px solid #f3f4f6'};
    border-radius: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: ${ props => props.primary ? '#0a7aff' : 'white' };
    cursor: pointer;
    font-size: 1.125rem;
    line-height: 1;
    font-weight: 600;
    text-decoration: none;
    color: ${ props => props.primary ? 'white' : '#0a7aff' };
    white-space: nowrap;
    outline: none;
    
    &:hover {
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
        transform: translateY(-2px);
    }

    & + & {
        margin-left: 1rem;
    }

` 