import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { randomUI32 } from 'uuid-js';

export default function App() {

  const [getItem, setItem] = useState('');
  const [getAllItems, setAllItems] = useState([]);

  const addItem = (item) => {
    setItem(item);
  };

  const updateItems = item => {
    setAllItems(myItems => [...getAllItems, item]);
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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter an Item"
          onChangeText={addItem}
        />
        <Button title="Add Item" onPress={updateItems.bind(this, getItem)}></Button>
      </View>
      <ScrollView style={styles.itemsContainer}>
        {getAllItems.map((i, index) =>
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{"item # " + (index + 1) + ": " + i}</Text>
          </View>)}
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
    justifyContent: 'flex-start',
  },
  text: {
    backgroundColor: randomUI32(),
    fontSize: 24,
    padding: 10,
    margin: 5
  },
  form: {
    flexDirection: "row",
  }
});
