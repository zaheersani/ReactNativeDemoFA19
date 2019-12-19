import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from './Card';
import Colors from '../theme/colors';
import Input from '../components/Input';

const StartGameCard = () => {
    return (
        <Card style={styles.gameinputcontainer}>
            <Text>Guess a Number</Text>
            <Input style={styles.input} keyboardType="number-pad" maxLength={2} />
            <View style={styles.buttonsContainer}>
                <View>
                    <Button title="Reset" color={Colors.btnCancel} />
                </View>
                <View>
                    <Button title="Guess" color={Colors.btnSubmit} />
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 50,
        textAlign: "center",
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
    },
});

export default StartGameCard;