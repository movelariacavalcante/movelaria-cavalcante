#!/bin/bash
cat <<'EOF' > src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#8b5e3c]">Bem-vindo à Movelaria Cavalcante</h1>
      <p className="mt-2 text-lg">Móveis e Eletrodomésticos de qualidade para sua casa.</p>
      <Link to="/products">
        <button className="mt-4 bg-[#8b5e3c] text-white px-4 py-2 rounded hover:bg-[#7a4f2e]">
          Ver Produtos
        </button>
      </Link>
    </div>
  );
}

export default Home;
EOF

cat <<'EOF' > src/pages/Products.js
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
EOF

cat <<'EOF' > src/pages/Cart.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#8b5e3c] mb-4">Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between mb-2">
              <p>{item.name}</p>
              <button className="text-red-500" onClick={() => removeFromCart(idx)}>X</button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: R${total.toFixed(2)}</p>
          <Link to="/checkout">
            <button className="mt-2 bg-[#8b5e3c] text-white px-4 py-2 rounded hover:bg-[#7a4f2e]">
              Finalizar Compra
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
EOF

cat <<'EOF' > src/pages/Checkout.js
import React from "react";

function Checkout() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#8b5e3c] mb-4">Checkout</h2>
      <p>Aqui você poderá pagar com Boleto ou Cartão (integração PagSeguro).</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">
        Pagar com PagSeguro
      </button>
    </div>
  );
}

export default Checkout;
EOF

echo "✅ Páginas criadas com sucesso!"
