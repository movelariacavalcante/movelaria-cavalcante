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
