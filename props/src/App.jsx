import './App.css'
import Titulo from './components/Titulo'
import Aluno from './components/Aluno'
import Nota from './components/Nota'
import Produto from './components/Produto'

function App() {
  return (
    <main className="container">
      {/* Etapa 1 */}
      <Titulo />

      {/* Etapas 2 e 3: o mesmo componente reutilizado 3 vezes */}
      <section>
        <h2>Alunos</h2>
        <div className="lista">
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
        </div>
      </section>

      {/* Etapa 4 */}
      <section>
        <h2>Notas</h2>
        <div className="lista">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="Banco de Dados" nota={6.5} />
        </div>
      </section>

      {/* Etapa 5 e Desafio */}
      <section>
        <h2>Produtos</h2>
        <div className="grid">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />
          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />
          <Produto
            nome="Headset Gamer"
            descricao="Som surround com microfone"
            preco={320}
            disponivel={false}
          />
          <Produto
            nome="Monitor 24”"
            descricao="Full HD com 75Hz"
            preco={890}
            disponivel={true}
          />
        </div>
      </section>
    </main>
  )
}

export default App
