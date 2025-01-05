import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import ProfileTextBox from '../../components/profileTextBox'; // Capitalize the component name

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top1}>
        <Image
          source={require('../../assets/men.jpg')}
          style={styles.profileImage}
        />
      </View>
      
      <View style={styles.bottom1}>
        <ProfileTextBox title="Name" value="John Doe" />
        <ProfileTextBox title="Email" value="johndoe23@gmail.com" />
        <ProfileTextBox title="Phone" value="1-570-236-7033" />
        
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('LoginScreen');
              Toast.show({
                type: 'success',
                text1: 'Successfully Logged out',
                position: 'bottom',
                visibilityTime: 3000,
              });
            }}
          >
            <Text style={styles.btext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2873F0',
    width: Dimensions.get('window').width,
    flex: 1,
  },
  bottom1: {
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#F45800',
    height: 40,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonView: {
    alignSelf: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
