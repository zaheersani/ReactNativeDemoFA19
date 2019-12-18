import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headertext: {
        fontSize: 25,
        color: 'white'
    },
    header: {
        backgroundColor: 'blue',
        width: '100%',
        height: 100,
        alignItems: "center",
        paddingTop: 50
    },
});

export default Header;