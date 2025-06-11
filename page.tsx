'use client';

import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/products') // Your backend URL
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6); // ✅ Show only first 6 products

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Hero Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Oru Phones</h1>
        <p className="text-lg">Find the best mobile deals in India</p>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Top Picks for You</h2>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* 🔗 See All Deals Button */}
        <div className="text-center mt-8">
          <Link href="/deals">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              See All Deals
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
