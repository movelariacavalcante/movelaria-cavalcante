import React from "react";
import { Link } from "react-router-dom";

function CartSidebar({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white shadow p-4 rounded w-64">
      <h2 className="font-bold mb-2 text-[#8b5e3c]">Carrinho</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center mb-2">
              <p>{item.name}</p>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(idx)}
              >
                X
              </button>
            </div>
          ))}
          <p className="font-bold text-[#8b5e3c] mt-2">Total: R${total.toFixed(2)}</p>
          <Link to="/checkout">
            <button className="mt-2 w-full bg-[#8b5e3c] text-white py-2 rounded hover:bg-[#7a4f2e]">
              Finalizar Compra
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
