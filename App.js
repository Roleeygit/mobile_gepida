import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bikes from './bikes.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bikes:</Text>
      <Text style={styles.subHeaderText}></Text>
      <Bikes/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 16,
  }
});


export default App;