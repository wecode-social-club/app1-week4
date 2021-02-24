import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Product from './src/Components/Product';
import { productData } from './data/product';

export default function App() {
  let newArr = productData.map(element => {
    return (
      <View style={{ width: 150 }}>
        <Image
          style={{ width: 150, height: 200 }}
          source={{
            uri: element.img,
          }}
        />
        <Text>{element.name}</Text>
        <Text>{element.price}</Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>{newArr}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
