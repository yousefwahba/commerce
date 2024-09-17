import { useCart } from "@/context/CartContext";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CartItem from "@/components/CartItem ";
import { router } from "expo-router";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const renderItem = ({ item }: any) => (
    <CartItem
      item={item}
      onIncrease={() => increaseQuantity(item.id)}
      onDecrease={() => decreaseQuantity(item.id)}
      onRemove={() => removeFromCart(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/cart/checkout")}
            style={styles.checkoutButton}
          >
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty!</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    padding: 16,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyCartText: {
    textAlign: "center",
    color: "#888",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
});
