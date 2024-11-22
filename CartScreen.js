import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const CartScreen = ({ route }) => {
  const { dish } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const price = parseFloat(dish.price.replace('R', '').replace(',', '')); 
  const total = (price * quantity).toFixed(2); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{dish.name}</Text>
      <Image source={dish.image} style={styles.dishImage} />
      <Text style={styles.price}>{dish.price}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={decreaseQuantity} />
        <Text style={styles.quantity}>{quantity}</Text>
        <Button title="+" onPress={increaseQuantity} />
      </View>
      <Text style={styles.total}>Total: R{total}</Text>
      <Button title="Confirm Order" onPress={() => alert('Order confirmed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CartScreen;
