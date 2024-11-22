import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import CategoryScreen from './CategoryScreen';
import CartScreen from './CartScreen';
import AddDishScreen from './AddDishScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Chef's Menu" component={AddDishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



