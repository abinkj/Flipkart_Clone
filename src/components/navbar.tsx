import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/main/CartScreen';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import ProductList from '../screens/main/ProductList';
import DetailScreen from '../screens/main/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => { 
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProductList" 
        component={ProductList} 
        options={{
          headerStyle: {
            backgroundColor: '#2873F0',
          },
        }}
      />
      <Stack.Screen 
        name="DetailScreen" 
        component={DetailScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#2873F0',
          }
        }} 
      />
    </Stack.Navigator>
  );
};



const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('../assets/icons/home.png');
          } else if (route.name === 'Cart') {
            iconPath = require('../assets/icons/cart.png');
          } else if (route.name === 'Profile') {
            iconPath = require('../assets/icons/profile.png');
          }

          return (
            <Image
              source={iconPath}
              style={{
                width: size,
                height: size,
                tintColor: color, // This will allow the icon to change color based on focus
              }}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: '#2873F0',
        },
        tabBarLabelStyle: {
          color: '#ffffff',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#000000',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 24,
    height: 24,
    tintColor: 'white', // White color to match the header theme
  },
});

export default MyTabs;
