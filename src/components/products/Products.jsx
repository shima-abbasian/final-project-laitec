import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../services/Services'; 

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(8); 
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



// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../../services/Services'; // تابع دریافت داده‌ها از API

// function Products({ selectedCategory }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         // بررسی وجود selectedCategory
//         const data = await fetchProducts(8, selectedCategory); // ارسال دسته‌بندی به API
//         setProducts(data);
//       } catch (error) {
//         console.error('Error loading products:', error);
//       }
//     };

//     loadProducts();
//   }, [selectedCategory]); // هر بار که دسته‌بندی تغییر کند، محصولات دوباره بارگذاری می‌شوند

//   return (
//     <div className="grid grid-cols-4 gap-4 p-4">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           productTitle={product.title}
//           productDesc={product.description}
//           price={product.price}
//           productImg={product.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default Products;