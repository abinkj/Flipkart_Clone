import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import HomeScreen from "../main/HomeScreen";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [verify, setVerify] = useState(false);
    const [pass, setPass] = useState("");
    const[pVerify, setPVerify]=useState(false);

    const handleEmail = (text) => {
        setEmail(text);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
            setVerify(true);
        } else {
            setVerify(false);
        }
    };
    const handlePass = (text) => {
        setPass(text);
        if(text.length>6){
            setPVerify(true)
        }else{
            setPVerify(false)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Here</Text>
            <Text style={styles.title1}>Welcome back you've{'\n'} been missed!</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleEmail}
                value={email}
            />
             <TextInput
                style={styles.password}
                placeholder="Password"
                secureTextEntry={true}
                value={pass}
                onChangeText={handlePass}
            />
            {!verify && email.length>0 && pass.length > 0 && (
                <Text style={styles.errorText}>Invalid Email /Password</Text>
            )}
           
            <TouchableOpacity 
                style={styles.button} 
                disabled={!(verify && pVerify)}
                onPress={() => navigation.navigate('Navbar')}
            >
                <Text style={styles.btext}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        color: '#2873F0',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: "Poppins",
        marginTop: 10,
    },
    title1: {
        fontSize: 20,
        color: 'black',
        marginBottom: 80,
        textAlign: 'center',
        fontFamily: "Poppins",
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: "#F1F4FF",
        padding: 10,
        color:'black'
    },
    password: {
        height: 40,
        width: 300,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        backgroundColor: "#F1F4FF",
        padding: 10,
        color:'black'
    },
    button: {
        backgroundColor: '#2873F0',
        height: 40,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
