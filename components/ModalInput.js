import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

export default function ModalInput(props) {

    const [getItem, setItem] = useState('');

    const addItem = (item) => {
        setItem(item);
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter an Item"
                    onChangeText={addItem}
                />
                <View style={styles.modalButtonsContainer}>
                    <View style={styles.modalButton}>
                        <Button title="Add Item" onPress={() => props.onAddItem(getItem)} />
                    </View>
                    <View style={styles.modalButton}>
                        <Button
                            title="Cancel"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 4,
        padding: 4,
        margin: 4,
        textAlign: "center",
        fontSize: 20
    },
    form: {
        flex: 1,
        justifyContent: "center",
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 20
    },
    modalButton: {
        width: '40%',
        padding: 10,
    }
});
