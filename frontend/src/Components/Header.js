// "use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignupForm from "./SignupForm";
import LoginForm from "./Loginform"; // Import the LoginForm
import { useRouter } from "next/router"; // Import useRouter

const Header = ({cart}) => {

  // Add a safe check to ensure cart is always an array
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to handle Login Form

  const router = useRouter(); // Get the current route
  const { pathname } = router; // Extract the current path

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <>
      <header className="nav-bar">
        <div className="top-bar">
          <div className="log">
            <Image src="/images/logo-footer.png" alt="logo" width={160} height={40} />
          </div>
          <div className="btns">
            <button
              className="btn signup-btn"
              onClick={() => setIsSignupOpen(true)}
            >
              Sign Up
            </button>
            <button
              className="btn login-btn"
              onClick={() => setIsLoginOpen(true)} // Open LoginForm on click
            >
              Login
            </button>
          </div>
        </div>
        <div className="menu-bar">
          <Link href="/" legacyBehavior>
            <a className={pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/furnitures" legacyBehavior>
            <a className={pathname === "/furnitures" ? "active" : ""}>Furnitures</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={pathname === "/about" ? "active" : ""}>About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={pathname === "/contact" ? "active" : ""}>Contact</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className={pathname === "/cart" ? "active" : ""}>
              <div className="shopping-cart">
                <div className="circle-value">{cart.length}</div>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </a>
          </Link>
        </div>

      </header>

      {/* Display the Signup Form as a Modal */}
      {isSignupOpen && (
        <SignupForm onClose={() => setIsSignupOpen(false)} toggleForm={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} />
      )}

      {/* Display the Login Form as a Modal */}
      {isLoginOpen && (
        <LoginForm onClose={() => setIsLoginOpen(false)} toggleForm={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} />
      )}
    </>
  );
};

export default Header;
