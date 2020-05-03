/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { View, Dimensions , TouchableWithoutFeedback, Keyboard , Text, ImageBackground } from 'react-native';
import { MainStyleSheet , dynamicHeight } from '../styles/MainStyleSheet';
import Container from '../components/Container';
import backgroundImage from '../assets/bg.jpg';
import TextField from '../components/TextField';
import RoundedButton from '../components/RoundedButton';
import { APP_PRIMARY_COLOR, APP_SECONDARY_COLOR } from '../constants/Values';
import Logo from '../components/Logo';
import { login } from '../services/auth.service';
export default class Login extends Component {

    state = {
        isKeyboard: false,
        password: null,
        email: null
    }
    constructor(props) {
        super(props);
        Keyboard.addListener('keyboardDidShow', this.keyBoardOpenHandler);
        Keyboard.addListener('keyboardDidHide', this.keyBoardHideHandler);
    }

    keyBoardOpenHandler = () => {
        this.setState({
            isKeyboard: true
        });
    }

    keyBoardHideHandler = () => {
        this.setState({
            isKeyboard: false
        });
    }

    loginButtonHandler = () => {
        login(this.state.email, this.state.password, (err) => {
            if (err) {
                alert('error');
            } else {
                this.props.navigation.replace('OptionScreen');
            }
        })
    }

    emailOnChangeHandler = (input) => {
        this.setState({
            email: input
        });
    }

    passwordOnChangeHandler = (input) => {
        this.setState({
            password: input
        });
    }
    
    render() {
        return (
            <Container>
                <ImageBackground style={[MainStyleSheet.fullSizeContainer , MainStyleSheet.alignItemsCenter]} source={backgroundImage}>
                    {!this.state.isKeyboard &&
                        <View style={[MainStyleSheet.height25, MainStyleSheet.justifyContentCenter]}>
                            <Logo/>
                        </View>
                    }
                    <View style={[MainStyleSheet.halfHeightContainer , MainStyleSheet.fullWidthContainer , MainStyleSheet.justifyContentCenter , MainStyleSheet.alignItemsCenter]}>
                        <TextField onChangeText={this.emailOnChangeHandler} placeholderTextColor={'white'} width={Dimensions.get('screen').width - 50} placeholder={'Type Email'} keyboardType={'default'} />
                        <TextField onChangeText={this.passwordOnChangeHandler} secureTextEntry={true} width={Dimensions.get('screen').width - 50} placeholder={'Type Password'} placeholderTextColor={'white'} />
                        <RoundedButton onPress={this.loginButtonHandler} bgColor={APP_PRIMARY_COLOR} text={'Login'} textColor={'white'} width={Dimensions.get('screen').width - 50} />
                    </View>
                    <View style={[MainStyleSheet.height25, MainStyleSheet.justifyContentStart, MainStyleSheet.alignItemsCenter]}>
                        <RoundedButton onPress={()=> {this.props.navigation.navigate('Signup')}} bgColor={APP_SECONDARY_COLOR} text={'Signup'} textColor={'white'} width={Dimensions.get('screen').width - 50}/>
                    </View>
                </ImageBackground>
            </Container>
        );
  }
}
