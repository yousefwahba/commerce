import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { products as mockProducts } from "@/constants/ApiMockProducts";

const Product = () => {
  const { id } = useLocalSearchParams();

  // Filter the product by id
  // (in real world,I am use react-query or useEffect )
  const product = mockProducts.find(
    (product) => product.id === parseInt(id.toLocaleString())
  );

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: "Details" }} />
      <ScrollView style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => Alert.alert("Success", "Added to cart!")}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ff6f61",
    textAlign: "center",
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  addToCartButton: {
    backgroundColor: "#ff6f61",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#ff6f61",
  },
});

export default Product;
