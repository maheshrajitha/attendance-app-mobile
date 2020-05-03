/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import logoLight from '../assets/logoLight.png';

const StyledLogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const StyledImage = styled.Image`
    height: ${Dimensions.get('screen').width / 5}px;
    width: ${Dimensions.get('screen').width / 5}px;
`;

const Logo = () => (
    <StyledLogoContainer>
        <StyledImage source={logoLight}/>
    </StyledLogoContainer>
);

export default Logo;