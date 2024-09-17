import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { products as mockProducts } from "@/constants/ApiMockProducts";
import ProductItem from "@/components/ProductItem";
import { Product } from "@/constants/Types";

const ProductList = () => {
  return (
    <FlatList
      data={mockProducts}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    backgroundColor: "#F5F5F5",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});

export default ProductList;
