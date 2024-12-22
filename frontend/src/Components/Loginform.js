import React from 'react';
import styles from '../styles/LoginForm.module.css'; // Import CSS module

const LoginForm = ({ onClose, toggleForm }) => {
  return (
    <div className={styles.formOuterContainer}>
      <div className={styles.formContainer}>
        <i
          className={`${styles.formCloseIcon} fa-regular fa-circle-xmark`} // Apply the close icon styles
          onClick={onClose}
        ></i>

        <form className={styles.loginForm}>
          <h1 className={styles.formTitle}>Login Account</h1>

          <div className={styles.formGroup}>
            <input type="email" className={styles.formInput} placeholder="Email" required />
          </div>

          <div className={styles.formGroup}>
            <input type="password" className={styles.formInput} placeholder="Password" required />
          </div>

          <div className={styles.formLinks}>
            <a onClick={toggleForm} href="#">
              Don't have an account?
            </a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Get Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
