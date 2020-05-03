/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MainStyleSheet } from '../styles/MainStyleSheet';

export default function Container(props) {
    return (
        <SafeAreaView style={props.style ? [MainStyleSheet.fullSizeContainer, MainStyleSheet.flexBox , props.style] : [MainStyleSheet.fullSizeContainer, MainStyleSheet.flexBox]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {props.children}
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}
