import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBikes(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>#{item.id}</Text>
      <Text style={styles.cell}>Name: <br></br>{item.name}</Text>
      <Text style={styles.cell}>Wheel: <br></br>{item.wheel}</Text>
      <Text style={styles.cell}>Usage: <br></br>{item.usage}</Text>
      <Text style={styles.cell}>Price: <br></br>{item.price}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={bikes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
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
});

export default Bikes;