/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import Container from '../components/Container';
import Logo from '../components/Logo';
import RoundedButton from '../components/RoundedButton';
import TextField from '../components/TextField';
import { Keyboard, View, ImageBackground, Dimensions, Alert } from 'react-native';
import bg from '../assets/bg.jpg';
import { MainStyleSheet } from '../styles/MainStyleSheet';
import { APP_SECONDARY_COLOR } from '../constants/Values';
import { newUser } from '../services/user.service';
export default class componentName extends Component {
    state = {
        isKeyboard : false,
        password: null,
        email: null
    }
    constructor(props) {
        super(props);
        Keyboard.addListener('keyboardDidShow', this.keyBoardShowHandler);
        Keyboard.addListener('keyboardDidHide',this.keyBoardHideHandler);
    }

    keyBoardShowHandler = () => {
        this.setState({
            isKeyboard: true
        });
    }

    keyBoardHideHandler = () => {
        this.setState({
            isKeyboard: false
        })
    }

    passwordChangeHandler = (input) => {
        this.setState({ password: input });
    }
    
    emailChangeHandler = (input) => {
        this.setState({ email: input });
    }

    signUpButtonHandler = () => {
        newUser(this.state.email, this.state.password, (err, message) => { 
            if (err) {
                Alert.alert('Error', message);
            }
        });
    }
    render() {
        return (
            <Container>
                <ImageBackground style={[MainStyleSheet.fullHeightContainer , MainStyleSheet.alignItemsCenter , MainStyleSheet.justifyContentCenter]} source={bg}>
                    {!this.state.isKeyboard && <View style={[MainStyleSheet.height25]}>
                        <Logo/>
                    </View>}
                    <View style={[MainStyleSheet.halfHeightContainer, MainStyleSheet.alignItemsCenter, MainStyleSheet.justifyContentStart]}>
                        <TextField onChangeText={this.emailChangeHandler} width={Dimensions.get('screen').width - 50} keyboardType={'default'} placeholder={'Type Email'} placeholderTextColor={'white'} />
                        <TextField onChangeText={this.passwordChangeHandler} width={Dimensions.get('screen').width - 50} secureTextEntry keyboardType={'default'} placeholder={'Type Password'} placeholderTextColor={'white'} />
                        <RoundedButton onPress={this.signUpButtonHandler} text={'Signup'} textColor={'white'} bgColor={APP_SECONDARY_COLOR} width={Dimensions.get('screen').width - 50} />
                    </View>
                </ImageBackground>
            </Container>
        )
    }
}
