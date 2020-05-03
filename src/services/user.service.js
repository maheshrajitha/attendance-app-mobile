/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Buffer } from 'buffer';
import database from '@react-native-firebase/database';
import { v1 } from 'react-native-uuid';
//import bcrypt from 'bcrypt';
import bcrypt from 'react-native-bcrypt';
export function newUser(email , password , callback) {
    // bcrypt.hash(password, 12, (err, encryptedString) => { 
    //     if (err)
    //         callback(true, 'Password Encryption Failed');
    //     else {
            
    //         callback(false, 'User Added');
    //     }
    // });
    database().ref(`/users/${email.replace('.', '')}`).once('value').then(value => {
        if (!value.hasChildren()) {
            database().ref(`/users/${email.replace('.','')}`).set({
                email: email,
                password: bcrypt.hashSync(password, 10),
                ipAddress: null,
                id: v1()
            }, () => {
                callback(false);
            });
        } else {
            callback(true, 'User Exists');
        }
    }).catch(err => {
        callback(true, err.message);
    })
    
    
    // database().ref(`/users`).once('value').then(val => {
    //     console.log(val);
    // })
}

export function addIpToUser(ipAddress , email) {
    database().ref(`/users/${JSON.parse(email).email.replace('.', '')}`).update({
        ipAddress: ipAddress
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    // console.log(ipAddress);
    // console.log(JSON.parse(email).email);
}