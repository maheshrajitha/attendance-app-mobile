/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import OptionScreen from '../screens/OptionScreen';

const Stack = createStackNavigator();
export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{header:()=> null}}>
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Signup'} component={Signup} />
                <Stack.Screen name={'OptionScreen'} component={OptionScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
