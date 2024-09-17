import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="products"
        options={{ title: "Products", headerShown: false }}
      />
      <Tabs.Screen name="cart" options={{ title: "Cart" }} />
    </Tabs>
  );
};
