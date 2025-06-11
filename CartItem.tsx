// components/CartItem.tsx
'use client';

import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ₹{item.price}</p>
      <p>Total: ₹{item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
