import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {product.inStock === false && (
        <Text style={styles.instock}>Stokta Yok</Text>
      )}
    </View>
  );
};

export default Card;
