export const fetchProducts = async () => {
  const headers = {
    Authorization: process.env.NEXT_PUBLIC_AUTH_KEY,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`,
    { headers }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.data.map((item) => ({
    id: item.id,
    title: item.title || "No Title",
    description: item.description || "No Description",
    imageUrl: item.imageUrl || "/default-image.jpg",
    price: item.price || 0,
  }));
};
