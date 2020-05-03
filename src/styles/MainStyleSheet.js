/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import { APP_PRIMARY_COLOR } from '../constants/Values';

export const MainStyleSheet = StyleSheet.create({
    fullHeightContainer: {
        height : Dimensions.get('screen').height
    },
    fullWidthContainer: {
        width : Dimensions.get('screen').width
    },
    fullSizeContainer: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    halfHeightContainer: {
        height: '50%',
    },
    flexBox: {
        flex: 1
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    height25: {
        height: Dimensions.get('screen').height / 4
    },
    primaryBgColor: {
        backgroundColor: APP_PRIMARY_COLOR
    },
    height33: {
        height : Dimensions.get('screen').height / 3
    },
    justifyContentStart: {
        justifyContent: 'flex-start'
    }
});

export const dynamicHeight = (style) => {
    return {
        height: Dimensions.get('screen').height - style
    }
}