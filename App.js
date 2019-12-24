import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Header from './components/Header';
import GameCard from './components/StartGameCard';
import Card from './components/Card';
import Input from './components/Input';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="First Screen" />
      <GameCard />
      {/* <View style={{ flexDirection: "row" }}>
        <Card>
          <Text>Another Card</Text>
          <Input placeholder='Enter Name' />
        </Card>
        <Card>
          <Text>Another Card</Text>
        </Card>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  }
});

export default App;