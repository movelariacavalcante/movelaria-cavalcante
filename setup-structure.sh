#!/bin/bash
echo "📂 Criando estrutura do projeto Movelaria Cavalcante..."

# Criar pastas principais
mkdir -p src/components src/pages src/assets src/utils

# Criar arquivos base
touch src/App.js src/index.css src/index.js
touch src/pages/Home.js src/pages/Products.js src/pages/Cart.js src/pages/Checkout.js
touch src/components/Navbar.js src/components/Footer.js src/components/CartSidebar.js
touch src/utils/api.js

echo "✅ Estrutura criada com sucesso!"
