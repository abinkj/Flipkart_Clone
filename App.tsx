import React, { useState, useEffect } from "react";
// import SplashScreen from './screens/SplashScreen';
import { Platform, StatusBar ,StatusBarStyle} from "react-native";
import LoginScreen from "./src/screens/onboarding/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from "./src/components/navbar";
import { Provider } from 'react-redux';
import { store } from './store';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator();

const App = () => {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) {
    //     return <SplashScreen />;
    // }

    useEffect(() => {
        if(Platform.OS=== 'android'){
            SplashScreen.hide();
        }
    },[])

    return (
        <Provider store={store}>
            <NavigationContainer>
            <StatusBar backgroundColor="#2873F0" barStyle="light-content" />
                <Stack.Navigator initialRouteName="LoginScreen">
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Navbar" component={MyTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </Provider>
    );
};

export default App;
