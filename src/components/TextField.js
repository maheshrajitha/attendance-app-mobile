/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const StyledTextField = styled.TextInput`
    border-radius: 50px;
    border-width: 1px;
    text-align: center;
    color: ${props=> props.color};
    width: ${props => props.width}px;
    height: ${props => props.height !== undefined ? props.height : Dimensions.get('screen').height / 18}px;
    border-color: white;
    margin: 8px;

`;

const TextField = ({width , color ='white' , height , onChangeText , secureTextEntry , keyboardType , placeholder , placeholderTextColor}) => (
    <StyledTextField color={color} secureTextEntry={secureTextEntry} placeholderTextColor={placeholderTextColor} placeholder={placeholder} keyboardType={keyboardType} onChangeText={onChangeText} height={height} width={width}/>
);

export default TextField;