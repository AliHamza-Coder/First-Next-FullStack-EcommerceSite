// components/DetailBox.js

import React from "react";
import styles from "../styles/detailBox.module.css"; // Import CSS module for styling

const DetailBox = ({ product, onClose, addToCart }) => {
  return (
    <div className={styles.displayDetailBox}>
      <div className={styles.detailBox}>
        <i
          className={`${styles.detailCloseIcon} fa-regular fa-circle-xmark`}
          onClick={onClose} // Close the modal on click
        ></i>
        <div className={styles.image}>
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          {/* Add to Cart button */}
          <button
            className={`${styles.btn} ${styles.addToCart}`}
            onClick={() => addToCart(product.title, product.price, product.imageUrl)} // Call addToCart when clicked
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
