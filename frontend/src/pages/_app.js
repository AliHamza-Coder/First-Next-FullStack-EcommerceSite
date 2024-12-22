import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Toast from "@/Components/Toast";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Function to trigger toast messages
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide the toast after 3 seconds
  };

  // Add item to the cart
  const addToCart = (title, price, imageUrl) => {
    const newCart = [...cart, { title, price, imageUrl }];
    setCart(newCart);
    console.log("Added to cart", newCart);

    // Show toast for added item
    showToastMessage(`${title} has been added to your cart!`);
    setReloadKey(Math.random()); // Trigger re-render if needed
  };

  // Remove item from the cart
  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem !== item);
    setCart(newCart);

    // Show toast for removed item
    showToastMessage(`${item.title} has been removed from your cart.`);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header key={reloadKey} cart={cart} />
      <Toast message={toastMessage} show={showToast} />
      <Component
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
