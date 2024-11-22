import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const menuData = {
  starters: {
    title: "Starters",
    image: require('./assets/Queen Prawns.jpg'),
    averagePrice: "R65.11",
    courses: [
      { name: "Honey Glazed Prawns" },
      { name: "Fresh Oysters" },
      { name: "Greek Salad" },
      { name: "Smoked Salmon Salad" },
      { name: "Bacon & Eggplant Salad" },
      { name: "Biltong & Mushroom Soup" },
      { name: "Sticky Wings" },
      { name: "Garlic & Cheese" },
      { name: "Calamari" },
    ],
  },
  mainMeals: {
    title: "Main Meals",
    image: require('./assets/Wagyu Burger.jpg'),
    averagePrice: "R153.75",
    courses: [
      { name: "Wagyu Burger" },
      { name: "Lamb Cutlet" },
      { name: "Something Nyama" },
      { name: "Lamb Shank" },
      { name: "Queen Prawns" },
      { name: "Pork Ribs" },
      { name: "Fillet on the bone" },
      { name: "Calamari" },
    ],
  },
  desserts: {
    title: "Desserts",
    image: require('./assets/Yogurt Cheesecake.jpg'),
    averagePrice: "R53.00",
    courses: [
      { name: "Yogurt Cheesecake" },
      { name: "Classic Shakes" },
      { name: "Chocolate Lava Cake" },
      { name: "Malva Pudding" },
      { name: "Ice Cream" },
    ],
  },
};

const MenuScreen = ({ navigation }) => {
  const renderCategory = (category) => {
    const categoryData = menuData[category];
    if (!categoryData) return null;

    return (
      <TouchableOpacity 
        key={category} 
        style={styles.category} 
        onPress={() => navigation.navigate('Category', { category })}
      >
        <Image source={categoryData.image} style={styles.image} />
        <Text style={styles.title}>{categoryData.title}</Text>
        <Text style={styles.price}>Average Price: {categoryData.averagePrice}</Text>
      </TouchableOpacity>
    );
  };

  // Calculates total number of items
  const totalItems = Object.values(menuData).reduce((total, category) => {
    return total + category.courses.length;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <Text style={styles.totalItems}>Total Menu Items: {totalItems}</Text>
      <View style={styles.categories}>
        {Object.keys(menuData).map(renderCategory)}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');  // Get screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalItems: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  category: {
    alignItems: 'center',
    margin: 10,
    width: (width - 60) / 2, // Dynamically adjust category width for responsiveness
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    marginTop: 5,
  },
});

export default MenuScreen;

