import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <TextInput blurOnSubmit {...props} style={{ ...styles.input, ...props.style }} />
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
});

export default Input;