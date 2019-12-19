import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Header from './Header';

const SecondScreen = (props) => {
    return (
        <View>
            <Header title="Second Screen" />
            <Text>Number:</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SecondScreen;