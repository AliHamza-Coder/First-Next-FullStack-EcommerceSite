import { useState } from 'react';
import { fetchProducts } from "../Utility/getProducts";
import DetailBox from "../Components/productsDetailBox"; // Import your DetailBox component

const Furnitures = ({ products, addToCart }) => {

  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product for preview

  const handlePreviewClick = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal preview
  };

  const handleClosePreview = () => {
    setSelectedProduct(null); // Close the preview modal
  };

  return (
    <main className="container">
      <section className="our-furnitures">
        <h1>Our Furniture Collections</h1>
        <div className="page-products">
          {products.map((product) => (
            <div
              key={product.slug}
              className="product-card"
              onClick={() => handlePreviewClick(product)} // Show preview when card is clicked
            >
              <div className="product-image">
                <img src={product.imageUrl} alt="Product Image" />
                <div className="product-icons">
                  <div
                    className="icon add-to-cart-icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering preview on add to cart button click
                      addToCart(product.title, product.price, product.imageUrl);
                    }}
                  >
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    {/* Add to Cart Icon */}
                  </div>
                  <div
                    className="icon preview-icon"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering preview when clicking the preview icon
                      handlePreviewClick(product); // Open preview on icon click
                    }}
                  > <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                    {/* Preview Icon */}
                  </div>
                </div>
              </div>
              <div className="product-info">
                {/* Directly use Link without an <a> tag inside */}
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Show the DetailBox Modal if a product is selected */}
      {selectedProduct && (
        <DetailBox
          product={selectedProduct}
          onClose={handleClosePreview}
          addToCart={addToCart} // Pass addToCart as prop
        />
      )}
    </main>
  );
};

export const getServerSideProps = async () => {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } }; // Provide fallback data
  }
};

export default Furnitures;
