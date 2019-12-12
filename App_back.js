import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { randomUI32 } from 'uuid-js';

export default function App() {

  const [getItem, setItem] = useState('');
  const [getAllItems, setAllItems] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);

  const addItem = (item) => {
    setItem(item);
  };

  const updateItems = item => {
    //setAllItems(myItems => [...getAllItems, item]);
    setAllItems(myItems => [...getAllItems, { key: Math.random().toString(), value: item }]);

    setModalVisible(false);
  };

  const removeItem = (item) => {
    setAllItems(getAllItems.filter((itemObj) => itemObj.key !== item.key));
  };

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
      <Button title="Add New Item" onPress={() => setModalVisible(true)} />
      <Modal visible={isModalVisible} animationType="slide" style={{ width: '100%' }}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter an Item"
            onChangeText={addItem}
          />
          <Button title="Add Item" onPress={updateItems.bind(this, getItem)}></Button>
          <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <ScrollView style={styles.itemsContainer}>
        {getAllItems.map((i, index) =>
          <TouchableOpacity activeOpacity={0.5} onPress={removeItem.bind(this, i)}>
            <View key={i.key} style={styles.item}>
              <Text style={styles.itemText}>{"item # " + index + ": " + i.value}</Text>
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
    margin: 4
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: randomUI32(),
    fontSize: 24,
    padding: 10,
    margin: 5
  },
  form: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  }
});
