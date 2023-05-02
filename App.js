import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bikes from './bikes.js';

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.subHeaderText}>Juhász Roland Szoft II N</Text>
      <Text style={styles.headerText}>Bikes:</Text>
      <Bikes/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    padding: 16,
  },
  row: 
  {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  cell: 
  {
    flex: 1,
    textAlign: 'center',
  },
  headerText: 
  {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  subHeaderText:
  {
    fontSize: 10
  }
});


export default App;