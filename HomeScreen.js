import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Circadian logo.png')}
        style={styles.logo}
        resizeMode="contain" // Ensures logo scales while maintaining aspect ratio
      />
      <View style={styles.buttonContainer}>
        <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    backgroundColor: 'white', // Set the background color to white
  },
  logo: {
    width: 500, // Adjust the width of the logo
    height: 500, // Adjust the height of the logo
  },
  buttonContainer: {
    position: 'absolute', // Position the button container at the bottom
    bottom: 20, // Distance from the bottom of the screen
  },
});

export default HomeScreen;

