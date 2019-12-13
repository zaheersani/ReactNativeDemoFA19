import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { randomUI32 } from 'uuid-js';

export default function App() {

  const [getItem, setItem] = useState('');
  const [getAllItems, setAllItems] = useState([]);
  const [isModalVisible, setModelVisibility] = useState(false);

  const addItem = (item) => {
    setItem(item);
  };

  const updateItems = item => {
    setAllItems(myItems => [...getAllItems, { key: Math.random().toString(), value: item }]);
    setModelVisibility(false);
  }

  const removeItem = item => {
    setAllItems(getAllItems.filter((obj) => obj.key !== item.key));
  }

  const showModal = () => {
    setModelVisibility(true);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row-reverse"
        }}
      >
        <Text
          style={styles.text}
        >
          Box 1
        </Text>
        <Text
          style={styles.text}
        >
          Box 2
        </Text>
        <Text
          style={styles.text}
        >
          Box 3
        </Text>
      </View>
      <View>
        <Button title="+ Add a New Item" onPress={showModal} />
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter an Item"
            onChangeText={addItem}
          />
          <View style={styles.modalButtonsContainer}>
            <View style={styles.modalButton}>
              <Button title="Add Item" onPress={updateItems.bind(this, getItem)} />
            </View>
            <View style={styles.modalButton}>
              <Button
                title="Cancel"
                onPress={() => setModelVisibility(false)}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.itemsContainer}>
        {getAllItems.map((i, index) =>
          <TouchableOpacity activeOpacity={0.5} onPress={removeItem.bind(this, i)}>
            <View key={i.key} style={styles.item}>
              <Text style={styles.itemText}>{"item # " + (index + 1) + ": " + i.value}</Text>
            </View>
          </TouchableOpacity>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    width: '80%',
  },
  item: {
    backgroundColor: randomUI32(),
    width: '95%',
    alignContent: "stretch",
    justifyContent: "flex-start",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 20,
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 4,
    padding: 4,
    margin: 4,
    textAlign: "center",
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    backgroundColor: randomUI32(),
    fontSize: 24,
    padding: 10,
    margin: 5
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
