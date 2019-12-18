import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const Card = () => {
    return (
        <View style={styles.gameinputcontainer}>
            <Text>Guess a Number</Text>
            <TextInput style={styles.input}></TextInput>
            <View style={styles.buttonsContainer}>
                <Button title="Reset" />
                <Button title="Guess" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 2
    },
    buttonsContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    gameinputcontainer: {
        height: 150,
        width: '80%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        padding: 20,
        marginTop: 10,
        borderRadius: 25,
    },
});

export default Card;