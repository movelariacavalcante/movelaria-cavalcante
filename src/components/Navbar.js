import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#8b5e3c] text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Movelaria Cavalcante</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
      </div>
    </nav>
  );
}

export default Navbar;
