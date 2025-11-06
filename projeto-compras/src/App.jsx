import React, { useState } from 'react';
import ProdutoLista from './components/ProdutoLista';
import './App.css';

export default function App() {
  // Lista de produtos com imagens online profissionais
  const [produtos] = useState([
    {
      id: 1,
      nome: 'Smartphone Premium',
      preco: 1299.99,
      imagem: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop',
      descricao: 'Smartphone de última geração com câmera 108MP e processador de ponta',
      especificacoes: 'Tela 6.7", 256GB, 12GB RAM'
    },
    {
      id: 2,
      nome: 'Laptop Profissional',
      preco: 2499.99,
      imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      descricao: 'Laptop potente para profissionais e criadores de conteúdo',
      especificacoes: 'Intel i7, 16GB RAM, SSD 512GB'
    },
    {
      id: 3,
      nome: 'Fones de Ouvido',
      preco: 349.99,
      imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      descricao: 'Fones com cancelamento de ruído ativo e som premium',
      especificacoes: 'Bluetooth 5.0, Bateria 30h'
    },
    {
      id: 4,
      nome: 'Smartwatch',
      preco: 599.99,
      imagem: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      descricao: 'Relógio inteligente com monitoramento de saúde avançado',
      especificacoes: 'Tela AMOLED, GPS, Monitor cardíaco'
    },
    {
      id: 5,
      nome: 'Smart TV 4K UHD',
      preco: 1899.99,
      imagem: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&h=400&fit=crop',
      descricao: 'Televisão 4K com tecnologia HDR e smart apps integrados',
      especificacoes: 'Tela 55", 4K UHD, Smart TV'
    },
    {
      id: 6,
      nome: 'Tablet',
      preco: 799.99,
      imagem: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
      descricao: 'Tablet versátil para trabalho e entretenimento',
      especificacoes: 'Tela 10.9", 128GB, 8GB RAM'
    }
  ] );

  // Estado para armazenar o produto selecionado
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função para atualizar o produto selecionado
  const handleSelecionar = (produto) => {
    setProdutoSelecionado(produto);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🛍️ Catálogo de Produtos</h1>
        <p>Explore nossos produtos incríveis</p>
      </header>

      <main className="app-main">
        <ProdutoLista 
          produtos={produtos} 
          onSelecionar={handleSelecionar}
        />

        {/* Painel de detalhes do produto selecionado */}
        {produtoSelecionado && (
          <div className="painel-detalhes">
            <div className="detalhes-container">
              <div className="detalhes-imagem">
                <img 
                  src={produtoSelecionado.imagem} 
                  alt={produtoSelecionado.nome}
                />
              </div>
              <div className="detalhes-info">
                <h2>{produtoSelecionado.nome}</h2>
                <p className="preco-detalhes">R$ {produtoSelecionado.preco.toFixed(2)}</p>
                <p className="descricao">{produtoSelecionado.descricao}</p>
                <p className="especificacoes"><strong>Especificações:</strong> {produtoSelecionado.especificacoes}</p>
                <button 
                  className="btn-fechar-detalhes"
                  onClick={() => setProdutoSelecionado(null)}
                >
                  Fechar Detalhes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Catálogo de Produtos Pedro Amaral. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
