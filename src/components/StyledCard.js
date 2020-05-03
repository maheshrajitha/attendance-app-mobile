/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
const StyledCard = styled.View`
    justify-content: ${props => props.contentCenter ? 'center' : 'flex-start'};
    align-items: ${props => props.contentCenter ? 'center' : 'flex-start'};
    height: ${props => props.height};
    width: ${props => props.width}px;
    background-color: white;
    border-radius: ${props => props.round ? 50 : 0}px;
    border-top-left-radius: ${props=> props.topRound ? 50 : 0}px;
    border-top-right-radius: ${props=> props.topRound ? 50 : 0}px;
`;

const Card = (props) => (
    <StyledCard topRound={props.topRound} contentCenter={props.contentCenter} height={props.height} width={props.width} round={props.round}>
        {props.children}
    </StyledCard>
);

export default Card;