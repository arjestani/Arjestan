import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent hover:border-emerald-200 text-center">
       <div className="overflow-hidden h-48">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">{product.name}</h4>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;