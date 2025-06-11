// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Info and copyright */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Ecommerce Tracker</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Navigation */}
        <div className="space-y-2">
          <h3 className="font-semibold">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Newsletter + Social */}
        <div className="space-y-4">
          <h3 className="font-semibold">Join Our Newsletter</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
