import React from 'react';
import { View, Text, Image } from 'react-native';

function Product(props) {
  return (
    <View style={{ width: 150 }}>
      <Image
        style={{ width: 150, height: 200 }}
        source={{
          uri: props.img,
        }}
      />
      <Text>{props.name}</Text>
      <Text>{props.price}</Text>
    </View>
  );
}

export default Product;
