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
