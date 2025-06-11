'use client';
import Link from 'next/link';
import { useCart } from '../components/CartContext'; // <-- ✅ Adjust the path if needed


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  seller?: string;
  rating?: number;
  inStock?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 ease-in-out bg-white">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
        }}
      />
      <h2 className="text-xl font-semibold truncate text-gray-900 mb-1">{product.name}</h2>
      <p className="text-green-600 font-medium mb-2">₹{product.price.toLocaleString('en-IN')}</p>
      {product.rating !== undefined && <p className="text-sm text-yellow-600 mb-1">⭐ {product.rating}/5</p>}
      {product.seller && <p className="text-sm text-gray-500 mb-1">Seller: {product.seller}</p>}
      {product.inStock !== undefined && (
        <p className={`text-sm font-medium ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      <div className="flex gap-2 mt-4">
        <Link href={`/products/${product.id}`}>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">View Details</button>
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
