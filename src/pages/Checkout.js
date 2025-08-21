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
