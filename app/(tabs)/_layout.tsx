import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet } from "react-native";
import { useCart } from "@/context/CartContext";

export default () => {
  const { cart } = useCart();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff6347",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <AntDesign name="shoppingcart" size={24} color={color} />
              {cart.length > 0 && (
                <View style={styles.cartCountBadge}>
                  <Text style={styles.cartCountText}>{cart.length}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  cartCountBadge: {
    position: "absolute",
    right: -10,
    top: -5,
    backgroundColor: "#ff6347",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
