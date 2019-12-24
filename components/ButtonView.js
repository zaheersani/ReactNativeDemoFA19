import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ButtonView = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.3} onPress={props.onPress} >
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 0,
        borderRadius: 25,
        padding: 10,
    },
    text: {
        color: 'white',
        textAlign: "center",
        fontSize: 16
    }
});

export default ButtonView;