import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';

const categoryData = {
  starters: {
    title: "Starters",
    courses: [
      { name: "Honey Glazed Prawns", price: "R100", image: require('./assets/Honey Glazed Prawns.jpg'), description: "Succulent prawns glazed in a sweet honey sauce." },
      { name: "Fresh Oysters", price: "R90", image: require('./assets/Fresh Oysters.jpg'), description: "Freshly shucked oysters served with lemon." },
      { name: "Greek Salad", price: "R60", image: require('./assets/Greek Salad.jpg'), description: "A refreshing mix of cucumbers, tomatoes, red onions, and bell peppers, topped with feta cheese and olives, drizzled with olive oil and oregano." },
      { name: "Smoked Salmon Salad", price: "R65", image: require('./assets/Smoked Salmon Salad.jpg'), description: "Mixed greens topped with smoked salmon, capers, and red onion, served with a zesty lemon vinaigrette for a light yet satisfying dish." },
      { name: "Bacon & Eggplant Salad", price: "R55", image: require('./assets/Bacon & Eggplant Salad.jpg'), description: "Grilled eggplant paired with crispy bacon, tossed in a tangy dressing and garnished with fresh herbs for a hearty, flavorful salad." },
      { name: "Biltong & Mushroom Soup", price: "R45", image: require('./assets/Biltong & Mushroom Soup.jpg'), description: "A rich, savory soup featuring biltong and mushrooms, simmered in broth—perfect for a comforting meal." },
      { name: "Sticky Wings", price: "R66", image: require('./assets/Sticky Wings.jpg'), description: "Crispy chicken wings coated in a sweet and spicy glaze, served with ranch or blue cheese dip—ideal for sharing." },
      { name: "Garlic & Cheese Roll", price: "R30", image: require('./assets/Garlic & Cheese.jpg'), description: "Warm rolls filled with garlic and melted cheese, baked to golden perfection—comfort food at its best." },
      { name: "Calamari", price: "R75", image: require('./assets/Calamari.jpg'), description: "Tender calamari rings, lightly breaded and fried, served with marinara sauce and lemon for a classic seafood treat." },
      // Add more starters here...
    ],
  },
  mainMeals: {
    title: "Main Meals",
    courses: [
      { name: "Wagyu Burger", price: "R135", image: require('./assets/Wagyu Burger.jpg'), description: "A luxurious burger with a juicy Wagyu beef patty." },
      { name: "Lamb Cutlet", price: "R225", image: require('./assets/Lamb Cutlet.jpg'), description: "Tender, marinated lamb cutlets grilled to perfection." },
      { name: "Something Nyama", price: "R120", image: require('./assets/Something Nyama.png'), description: "A communal dish of assorted marinated meats grilled over an open flame, typically served with sides like pap, chakalaka, and fresh salad. It's a flavorful and sociable meal, perfect for gatherings and celebrations." },
      { name: "Lamb Shank", price: "R230", image: require('./assets/Lamb Shank.jpg'), description: "Slow-cooked lamb shank braised in red wine and herbs, served on creamy mashed potatoes and garnished with rosemary." },
      { name: "Queen Prawns", price: "R145", image: require('./assets/Queen Prawns.jpg'), description: "Grilled queen prawns marinated in garlic and herbs, served on jasmine rice with a zesty lemon butter sauce." },
      { name: "Pork Ribs", price: "R125", image: require('./assets/Pork Ribs.jpg'), description: "Tender, fall-off-the-bone pork ribs glazed in a smoky barbecue sauce, served with a side of coleslaw and crispy fries. These ribs are packed with flavor and perfect for those who enjoy a hearty meal." },
      { name: "Fillet on the bone", price: "R175", image: require('./assets/Fillet on the bone.jpg'), description: "A prime cut of beef fillet cooked on the bone for enhanced flavor and tenderness. Served with a rich red wine reduction and seasonal vegetables, this dish is a true indulgence for steak enthusiasts." },
      { name: "Calamari", price: "R75", image: require('./assets/Calamari.jpg'), description: "Lightly breaded and fried calamari rings served with zesty lemon aioli and seasonal vegetables. Crispy on the outside and tender inside, this dish is a flavorful and satisfying choice for seafood lovers." },
      // Add more main meals here...
    ],
  },
  desserts: {
    title: "Desserts",
    courses: [
      { name: "Yogurt Cheesecake", price: "R55", image: require('./assets/Yogurt Cheesecake.jpg'), description: "A light and creamy yogurt cheesecake." },
      { name: "Classic Shakes", price: "R45", image: require('./assets/Classic Shakes.jpg'), description: "Creamy shakes available in multiple flavors." },
      { name: "Chocolate Lava Cake", price: "R65", image: require('./assets/Chocolate Lava Cake.jpg'), description: "A rich and indulgent warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream. Each bite offers a decadent burst of chocolate, making it a perfect treat for chocolate lovers." },
      { name: "Malva Pudding", price: "R60", image: require('./assets/Malva Pudding.jpg'), description: "A spongy South African dessert infused with caramel flavor, served warm with a rich cream sauce, offering comforting sweetness." },
      { name: "Ice Cream", price: "R40", image: require('./assets/Ice Cream.jpg'), description: "Creamy, handcrafted ice cream available in classic flavors like vanilla, chocolate, and strawberry. Served with various toppings, it’s a delightful treat perfect for any occasion." },
      // Add more desserts here...
    ],
  },
};

const CategoryScreen = ({ navigation, route }) => {
  const { category } = route.params;
  const selectedCategory = categoryData[category];

  // Initialize courses in the state
  const [courses, setCourses] = useState(selectedCategory.courses);

  const handleAddDish = (newDish) => {
    setCourses([...courses, newDish]);
    navigation.goBack(); // Go back after adding
  };

  const removeCourse = (courseName) => {
    setCourses(courses.filter(course => course.name !== courseName));
  };

  const renderItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseDetails}>
        <Text style={styles.courseName}>{item.name}</Text>
        <Text style={styles.coursePrice}>{item.price}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
        <Button title="Add to Cart" onPress={() => navigation.navigate('Cart', { dish: item })} />
      
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{selectedCategory.title}</Text>
      <FlatList
        data={courses}
        keyExtractor={(item, index) => `${item.name}-${index}`} // to avoid the duplicate key issue error
        renderItem={renderItem}
      />
      <Button 
        title="Chef Menu" 
        onPress={() => navigation.navigate("Chef's Menu", { 
          courses, 
          setCourses, // Pass setCourses function
          addDish: handleAddDish, 
          removeDish: removeCourse  })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  courseDetails: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold'
  },
  coursePrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  },
  courseDescription: {
    fontSize: 14,
    color: 'black',
    fontWeight:'bold'
  },
});

export default CategoryScreen;

