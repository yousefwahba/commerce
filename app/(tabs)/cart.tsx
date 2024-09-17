import { useCart } from "@/context/CartContext";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CartItem from "@/components/CartItem ";

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
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
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
