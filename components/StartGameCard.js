import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'

import Card from './Card';
import Colors from '../theme/colors';
import Input from './Input';
import ButtonView from './ButtonView';

const StartGameCard = () => {
    const [getNumber, setNumber] = useState('5');

    const onTextChangeHandler = (value) => {
        // console.log(value);
        setNumber(value);
    }

    const onBtnResetPress = () => {
        setNumber('');
    };

    let numberCard;

    const onBtnGuessPress = () => {
        setNumber(getNumber);
        if (getNumber === NaN || getNumber <= 0 || getNumber > 99) {
            Alert.alert("Invalid Input", "Input a Number between 1 and 99", [{ text: 'OK', style: "default" }]);
        }
        else {
            console.log(getNumber);
            numberCard = <Text style={{ fontSize: 24, color: 'black' }}>You entered {getNumber}</Text>;
        }
    }

    return (
        <View style={styles.gameinputcontainer}>
            <Card style={styles.gameinputcontainer}>
                <Text style={{ fontSize: 16, textAlign: "center" }}>Guess a Number between 1 and 100</Text>
                <Input style={styles.input} keyboardType="number-pad" maxLength={2} value={getNumber} onChangeText={onTextChangeHandler} />
                <View style={styles.buttonsContainer}>
                    <View>
                        <ButtonView title="Reset" style={styles.buttonReset} onPress={onBtnResetPress} />
                        {/* <Button title="Reset" color={Colors.btnCancel} /> */}
                    </View>
                    <View>
                        <ButtonView title="Guess" style={styles.buttonGuess} onPress={onBtnGuessPress} />
                        {/* <Button title="Guess" color={Colors.btnSubmit} /> */}
                    </View>
                </View>
            </Card>
            {numberCard}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonGuess: {
        backgroundColor: Colors.btnSubmit,
        width: 100,
    },
    buttonReset: {
        backgroundColor: Colors.btnCancel,
        width: 100,
    },
    input: {
        width: 50,
        fontSize: 16,
        textAlign: "center",
        paddingTop: 10,
        textAlignVertical: "center",
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 10,
    },
    gameinputcontainer: {
        // height: 150,
        width: '80%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default StartGameCard;