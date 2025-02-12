"use client";
import { useState } from 'react';
export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
          }
    };
    const decrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
      return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">Choose Quantity</h2>
          <div className="flex items-center space-x-6">
            <button
              onClick={decrement}
              disabled={quantity === 1}
              className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
            >
              -
            </button>
            <span className="text-2xl font-semibold">{quantity}</span>
            <button
              onClick={increment}
              disabled={quantity === 20}
              className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
      );
}
