import React from 'react';
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        elevation: 4,
        padding: 20,
        marginTop: 20,
        borderRadius: 4,
    },
});

export default Card;