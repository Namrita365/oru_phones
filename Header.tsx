// frontend/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">🛒 Ecommerce Tracker</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/deals">Best Deals</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}