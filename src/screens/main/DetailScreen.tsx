import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type DetailScreenProps = {
  route: RouteProp<{ params: { productId: number } }, 'params'>;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(e => {
        console.log(e);
        setError('Failed to load product details');
      })
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      Toast.show({
        type: 'success',
        text1: 'Added to Cart',
        position: 'bottom',
        visibilityTime: 2000
      });
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading product details...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <SafeAreaView style={styles.container}>
        {product ? (
          <>
            <Image source={{ uri: product.image }} style={styles.img} />
            <Text style={styles.price}>$ {product.price}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleAddToCart}
            >
              <Text style={styles.btext}>Add to Cart</Text>
            </TouchableOpacity>
            <Text style={styles.desc}>Description{"\n"}{product.description}</Text>
          </>
        ) : (
          <Text>Product not found</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 30,
  },
  img: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#F45800',
    height: 40,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
