/* eslint-disable curly */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Buffer } from 'buffer';
import database from '@react-native-firebase/database';
//import { v1 } from 'react-native-uuid';
//import bcrypt from 'bcrypt';
import AsyncStorage from '@react-native-community/async-storage';
import bcrypt from 'react-native-bcrypt';
export function login(email, password, callback) {
    database().ref(`/users/${email.replace('.', '')}`).once('value').then(value => {
        if (value.hasChildren()) {
            if (bcrypt.compareSync(password, value.child('password').val())) {
                AsyncStorage.setItem('user', JSON.stringify({
                    email: value.child('email').val(),
                    id: value.child('id').val()
                }));
                callback(false);
            } else
                callback(true);
        } else
            callback(true);
    }).catch(e => {
        callback(true);
        console.log(e);
    })
}