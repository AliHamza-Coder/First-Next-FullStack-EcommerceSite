// Toast.js

import React, { useEffect } from "react";
import styles from "../styles/Toast.module.css"; // Import CSS module for styling

const Toast = ({ message, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        show = false;  // This should not be done directly, it's a prop.
      }, 3000); // Toast disappears after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show]);  // If show changes, the timer will reset.

  return (
    show && (
      <div className={styles.toast}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Toast;
