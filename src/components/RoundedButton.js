/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const StyledTouchable = styled.TouchableOpacity`
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    width: ${props => props.width}px;
    height: ${props => props.height ? props.height : Dimensions.get('screen').height / 18}px;
    background-color: ${props => props.bgColor};
    margin-top: ${Dimensions.get('screen').height / 100}px;
`;
const StyledText = styled.Text`
    color: ${props=> props.textColor};
`;

const RoundedButton = ({ text, onPress ,textColor, height, width, bgColor }) => (
    <StyledTouchable onPress={onPress} bgColor={bgColor} height={height} width={width}>
        <StyledText textColor={textColor}>{text}</StyledText>
    </StyledTouchable>
);

export default RoundedButton;
