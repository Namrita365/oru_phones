'use client';

import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images: string[];
  seller: string;
  location: string;
  phoneNumber: number;
}

const ProductDetail: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-auto rounded"
          />
        </div>

        <div className="space-y-4">
          <p className="text-xl text-green-700 font-semibold">
            ₹{product.price}
          </p>
          <p className="text-gray-700">{product.description || 'No description available.'}</p>

          <div className="mt-4">
            <p className="font-semibold">Seller:</p>
            <p>{product.seller}</p>
            <p>{product.location}</p>
            <p>📞 {product.phoneNumber}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Save
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
