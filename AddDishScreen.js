import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';

const AddDishScreen = ({ route, navigation }) => {
  const { courses, setCourses } = route.params; // Access the courses and setCourses function passed from CategoryScreen

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!name || !price || !description) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Validate price input
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      Alert.alert('Invalid Price', 'Please enter a valid price.');
      return;
    }

    const newDish = {
      name,
      price: `R${parsedPrice.toFixed(2)}`, // Format price as currency
      description,
    };

    setCourses(prevCourses => [...prevCourses, newDish]); // Update the courses list in CategoryScreen
    navigation.goBack(); // Go back to CategoryScreen
  };

  const removeDish = (courseName) => {
    const updatedCourses = courses.filter(course => course.name !== courseName);
    setCourses(updatedCourses); // Update the courses list in CategoryScreen
  };

  const renderDishItem = ({ item }) => (
    <View style={styles.dishItem}>
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishPrice}>{item.price}</Text>
      <Text style={styles.dishDescription}>{item.description}</Text>
      <TouchableOpacity onPress={() => removeDish(item.name)}>
        <Text style={styles.removeDish}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Dish" onPress={handleSubmit} />

      <Text style={styles.title}>Existing Dishes</Text>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderDishItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  dishItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishPrice: {
    fontSize: 16,
    color: 'red',
  },
  dishDescription: {
    fontSize: 14,
  },
  removeDish: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default AddDishScreen;

