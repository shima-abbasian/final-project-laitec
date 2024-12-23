import React from 'react';

function ProductCard({ productTitle, productDesc, price, productImg }) {
  return (
    <div className="bg-white rounded-md shadow-sm flex flex-col w-[250px] h-[400px]">
      <div className="m-auto p-5">
        <img className="h-40 object-cover" src={productImg} alt={productTitle} />
      </div>
      <div className="px-2 py-4 flex flex-col justify-between flex-grow">
        <div className=''>
          <p className="text-[17px] font-bold block overflow-hidden text-ellipsis whitespace-nowrap">{productTitle}</p>
          <span className="text-[15px] block overflow-hidden text-ellipsis whitespace-nowrap text-gray-600">{productDesc}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button type="button" className="bg-black text-white px-4 py-2 text-sm rounded-md">
            Add to Cart
          </button>
          <span className="font-bold text-lg">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
