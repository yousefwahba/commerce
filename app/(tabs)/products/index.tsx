import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const productsList = () => {
  return (
    <>
      <Link
        href={{
          pathname: "products/product/[id]",
          params: { id: "1" },
        }}
      >
        <Text>product 1</Text>
      </Link>
      <Link
        href={{
          pathname: "products/product/[id]",
          params: { id: "2" },
        }}
      >
        <Text>product 2</Text>
      </Link>
      <Link
        href={{
          pathname: "products/product/[id]",
          params: { id: "3" },
        }}
      >
        <Text>product 3</Text>
      </Link>
    </>
  );
};

export default productsList;
