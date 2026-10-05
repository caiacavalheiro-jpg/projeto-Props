// Etapa 2: o nome e a turma chegam por props
function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <div className="avatar">{nome[0]}</div>
      <div>
        <h3>{nome}</h3>
        <p>Turma: {turma}</p>
      </div>
    </div>
  )
}

export default Aluno
