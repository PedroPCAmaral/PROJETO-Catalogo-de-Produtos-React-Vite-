import React from 'react';

export default function ProdutoLista({ produtos, onSelecionar }) {
  return (
    <div className="produto-lista">
      {produtos.map(produto => (
        <div key={produto.id} className="produto-card" onClick={() => onSelecionar(produto)}>
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
