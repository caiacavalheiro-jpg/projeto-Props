// Etapa 5: card de produto | Desafio: prop "disponivel" com ternário
function Produto({ nome, descricao, preco, disponivel }) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="produto">
      <span className={disponivel ? 'status ok' : 'status off'}>
        {disponivel ? 'Disponível' : 'Indisponível'}
      </span>

      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong className="preco">{precoFormatado}</strong>

      <button disabled={!disponivel}>Comprar</button>
    </article>
  )
}

export default Produto
