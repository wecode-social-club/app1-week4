import React from 'react';
import { View, Text } from 'react-native';
import { productData } from '../../data/product';
import Product from '../Components/Product';

export default function Main() {
  let newArr = productData.map(element => {
    return (
      <Product img={element.img} name={element.name} price={element.price} />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>{newArr}</ScrollView>
    </View>
  );
}
