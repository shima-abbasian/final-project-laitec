import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../services/Services'; // تابع دریافت داده‌ها از API

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(8); // تعداد محصولات دریافتی
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productTitle={product.title}
          productDesc={product.description}
          price={product.price}
          productImg={product.image}
        />
      ))}
    </div>
  );
}

export default Products;
