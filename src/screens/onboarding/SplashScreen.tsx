import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
 
    return (
      <View style={styles.splashContainer}>
        <Image source={require('../assets/image3.png')} style={styles.img} />
        <Text style={styles.title}>Flipkart</Text>
      </View>
    );
  

  
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2873F0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white'
  },
  img: {
    width: 100, 
    height: 100, 
    marginBottom: 10, // Add space between the image and the text
  },
});

export default SplashScreen;
