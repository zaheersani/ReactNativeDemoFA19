import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { randomUI32 } from 'uuid-js';

export default function App() {

  const [getItem, setItem] = useState('');
  const [getAllItems, setAllItems] = useState([]);

  const addItem = (item) => {
    setItem(item);
    // console.log(item);
  };

  const updateItems = item => {
    console.log(getItem);
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
      <ScrollView>
        {getAllItems.map((i, index) => <View style={styles.item}>
          <Text>{"#" + index + " " + i}</Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: randomUI32(),
    fontSize: 20,
    width: '100%',
    height: 300,
    borderRadius: 4
  },
  input: {
    fontSize: 20,
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
    // padding: 10,
    // margin: 10
  }
});
