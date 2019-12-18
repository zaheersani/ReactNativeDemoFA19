import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Header from './components/Header';
import Card from './components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="First Screen" />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;