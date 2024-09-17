import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Product = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Details" }} />
      <View>
        <Text>Product {id}</Text>
      </View>
    </>
  );
};

export default Product;
