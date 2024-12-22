import { useState, useEffect } from "react";

const CartPage = ({ cart, removeFromCart }) => {
  const [cartItems, setCartItems] = useState(cart); // Local state for cart items

  // Use useEffect to watch for changes in the cart prop and update local state
  useEffect(() => {
    setCartItems(cart);
  }, [cart]); // When cart state changes, update local state

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="container cart-aria">
      <div className="cart">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
        </div>
        {cartItems.length > 0 ? (
          <div className="cart-items" id="productCartContainer">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.title}>
                <img src={item.imageUrl} alt={item.title} className="item-image" />
                <div className="item-details">
                  <p className="item-name">{item.title}</p>
                  <div className="item-price">${item.price}</div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => {
                    removeFromCart(item); // Call the function passed via props
                    setCartItems(cartItems.filter(cartItem => cartItem !== item)); // Remove item from local state
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="emptyCart">Your cart is empty! ☹️</p>
        )}
        <div className="cart-summary">
          <div className="productFinalTotal total-price">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <a href="customer-order-form.html">
            <button className="checkout-btn">Proceed to Checkout</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
