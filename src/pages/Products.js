import React, { useState } from "react";

const products = [
  { id: 1, name: "Armário de Cozinha", price: 899.99 },
  { id: 2, name: "Sofá Retrátil", price: 1599.99 },
  { id: 3, name: "Geladeira Frost Free", price: 2499.99 },
];

function Products() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#8b5e3c] mb-4">Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow">
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-[#8b5e3c] font-bold">R${product.price}</p>
            <button
              className="mt-2 bg-[#8b5e3c] text-white px-4 py-2 rounded hover:bg-[#7a4f2e]"
              onClick={() => addToCart(product)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
