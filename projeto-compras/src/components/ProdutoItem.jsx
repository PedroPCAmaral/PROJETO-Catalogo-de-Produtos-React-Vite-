import React from 'react';

export default function ProdutoItem({ produto, onSelecionar }) {
  return (
    <div className="produto-card">
      <img 
        src={produto.imagem} 
        alt={produto.nome} 
        className="produto-imagem"
      />
      <div className="produto-info">
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
        <button 
          className="btn-selecionar"
          onClick={() => onSelecionar(produto)}
        >
          Selecionar
        </button>
      </div>
    </div>
  );
}
