import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product, CartContextType, CartItem } from "@/constants/Types";

// AsyncStorage keys
const CART_STORAGE_KEY = "user_cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load the cart from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Failed to load cart from AsyncStorage:", error);
      }
    };

    loadCart();
  }, []);

  // Save the cart to AsyncStorage whenever it changes
  const saveCart = async (newCart: CartItem[]) => {
    try {
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    } catch (error) {
      console.error("Failed to save cart to AsyncStorage:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      saveCart(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      saveCart(updatedCart);
      return updatedCart;
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCart(updatedCart);
      return updatedCart;
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveCart(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    AsyncStorage.removeItem(CART_STORAGE_KEY); // Clear cart from AsyncStorage
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
