/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import Container from '../components/Container';
import { View, Dimensions } from 'react-native';
import { MainStyleSheet } from '../styles/MainStyleSheet';
import TextField from '../components/TextField';
import RoundedButton from '../components/RoundedButton';
import { APP_SECONDARY_COLOR } from '../constants/Values';
import AsyncStorage from '@react-native-community/async-storage';
import { addIpToUser } from '../services/user.service';

export default class componentName extends Component {

    state = {
        ipAddress: null
    }
    ipAddButtonHandler = async () => {
        // AsyncStorage.getItem('user', async (err, val) => { 
        //     let email = await val;
        //     if (!err || typeof email !== 'undefined') {
        //         addIpToUser(this.state.ipAddress, val);
        //     }
        // });
        let email = await AsyncStorage.getItem('user');
        addIpToUser(this.state.ipAddress, email);
    }

    ipChangeHandler = (input) => {
        this.setState({
            ipAddress: input
        })
    }
    render() {
        return (
            <Container>
                <View style={[MainStyleSheet.fullSizeContainer , MainStyleSheet.justifyContentCenter , MainStyleSheet.alignItemsCenter , {flex : 1}]}>
                    <TextField color={'black'} onChangeText={this.ipChangeHandler} width={Dimensions.get('screen').width - 50} placeholder={'Type IP Address'} placeholderTextColor={'black'} />
                    <RoundedButton onPress={this.ipAddButtonHandler} bgColor={APP_SECONDARY_COLOR} width={Dimensions.get('screen').width / 2} text={'Add IP Addrss'} textColor={'white'}/>
                </View>
            </Container>
        );
    }
}
