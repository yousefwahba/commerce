import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router"; // Removed unused `Link` import

import { products as mockProducts } from "@/constants/ApiMockProducts";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList = ({ products }: { products: Product[] }) => {
  // Renders a single product item
  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => router.push(`products/product/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={mockProducts}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 15, // Increased padding for better spacing
    backgroundColor: "#F5F5F5", // Light background to make items pop
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15, // Added margin for better vertical spacing
  },
  productContainer: {
    flex: 1,
    margin: 8, // Slightly increased margin
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // Increased shadow depth for better focus
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  productImage: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 10, // Added spacing between image and title
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#333", // Darker text for better contrast
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF6F61", // More vibrant color for the price
  },
});

export default ProductList;
