// Etapa 4: props numéricas (nota={8.5}) chegam como número
function Nota({ disciplina, nota }) {
  return (
    <div className="nota">
      <span>{disciplina}</span>
      <strong className={nota >= 7 ? 'aprovado' : 'recuperacao'}>
        {nota.toFixed(1)}
      </strong>
    </div>
  )
}

export default Nota
