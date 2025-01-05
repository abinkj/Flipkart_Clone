import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topbox}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/image3.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.logot}>Flipkart</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.search}
                        placeholder='Search for Products'
                        placeholderTextColor="#999"
                    />
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={styles.searchIcon}
                    />
                </View>
            </View>

            <Image source={require('../../assets/cr3.jpg')} style={styles.carousel} />

            <View style={styles.scrollContent}>
                <Text style={styles.trend}>Trending Categories</Text>

                <View style={styles.cardRow}>
                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('ProductList')}>
                        <Image style={styles.cardImg} source={require('../../assets/men.jpg')} />
                        <Text style={styles.cardText}>Menswear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('ProductList')}>
                        <Image style={styles.cardImg} source={require('../../assets/women.jpg')} />
                        <Text style={styles.cardText}>Womenswear</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardRow}>
                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('ProductList')}>
                        <Image style={styles.cardImg} source={require('../../assets/elec.jpg')} />
                        <Text style={styles.cardText}>Electronics</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('ProductList')}>
                        <Image style={styles.cardImg} source={require('../../assets/jewel.jpg')} />
                        <Text style={styles.cardText}>Jewellery</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    topbox: {
        backgroundColor: '#2873F0',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    logot: {
        color: "white",
        fontSize: 22,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        elevation: 3, // Add shadow for Android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    search: {
        flex: 1,
        height: 40,
        color: 'black',
    },
    searchIcon: {
        height: 24,
        width: 24,
        marginLeft: 10,
        tintColor: '#666',
    },
    carousel: {
        height: 100,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        elevation: 4, // Add shadow for Android
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    scrollContent: {
        paddingBottom: 20,
        flex:1
    },
    trend: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:20,
    },
    cardItem: {
        width: 160,
        alignItems: 'center',
    },
    cardImg: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    cardText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default HomeScreen;
