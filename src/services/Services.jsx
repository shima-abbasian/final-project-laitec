export const fetchProducts = async (limit = 5) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  