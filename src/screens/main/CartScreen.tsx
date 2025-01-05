import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { removeFromCart, clearCart, updateQuantity } from '../../redux/CartSlice'; // Assuming you have this action
import Toast from 'react-native-toast-message';

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    Toast.show({
      type: 'success',
      text1: 'Order Placed',
      position: 'top',
      visibilityTime: 2000
    });
  };

  const handleIncrement = (id: number) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: -1 }));
    } else {
      handleRemoveItem(id);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={styles.details}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => handleDecrement(item.id, item.quantity)}>
                      <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                      <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => handleRemoveItem(item.id)}
                >
                  <Text style={styles.btext1}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleClearCart}
            >
              <Text style={styles.btext}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#2873F0',
  },
  quantity: {
    fontSize: 14,
    marginHorizontal: 10,
    color: '#777',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button1: {
    backgroundColor: '#ff3b30',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  btext1: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F45800',
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 'auto',
    textAlign: 'center',
  },
});
