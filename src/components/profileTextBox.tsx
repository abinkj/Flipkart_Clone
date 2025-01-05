import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const ProfileTextBox = ({ title, value }) => {
  return (
    <View>
      <Text style={styles.nameText}>{title}</Text>
      <View style={styles.box}>
        <Text style={styles.nameText}>{value}</Text>
      </View>
    </View>
  );
}

export default ProfileTextBox;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#D9D9D9',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    height: 40,
    marginTop: 5,
  },
  nameText: {
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
