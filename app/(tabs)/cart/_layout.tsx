import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayoutC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Cart", title: "Cart " }}
      />
    </Stack>
  );
};

export default StackLayoutC;
