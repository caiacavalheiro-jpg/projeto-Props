import './App.css'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'

// Etapa 1 - primeiro componente
function Titulo() {
  return (
    <header className="titulo">
      <h1>Prática de React</h1>
      <p>Aprendendo componentes e props.</p>
    </header>
  )
}

// Etapas 2 e 3 - o nome e a turma vem pelas props
function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <div className="inicial">{nome[0]}</div>
      <div>
        <h3>{nome}</h3>
        <p>Turma: {turma}</p>
      </div>
    </div>
  )
}

// Etapa 4 - nota é número, por isso usa { }
function Nota({ disciplina, nota }) {
  return (
    <div className="nota">
      <span>{disciplina}</span>
      <strong className={nota >= 7 ? 'verde' : 'vermelho'}>{nota}</strong>
    </div>
  )
}

// Etapa 5 + desafio
function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div className="produto">
      <span className={disponivel ? 'status verde' : 'status vermelho'}>
        {disponivel ? 'Disponível' : 'Indisponível'}
      </span>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong className="preco">R$ {preco.toFixed(2).replace('.', ',')}</strong>
      <button disabled={!disponivel}>Comprar</button>
    </div>
  )
}

function App() {
  return (
    <div className="pagina">
      <Titulo />

      {/* texto na esquerda, imagem na direita */}
      <section className="bloco">
        <div className="texto">
          <h2>Alunos</h2>
          <p>
            Aqui eu uso o mesmo componente Aluno três vezes. O que muda é só
            o que eu mando nas props.
          </p>
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
        </div>
        <div className="imagem">
          <img src={heroImg} alt="Camadas representando componentes" />
        </div>
      </section>

      {/* imagem na esquerda, texto na direita */}
      <section className="bloco inverso">
        <div className="texto">
          <h2>Notas</h2>
          <p>
            Valores numéricos são enviados com chaves, por exemplo
            nota={'{8.5}'}. Acima de 7 fica verde.
          </p>
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="Banco de Dados" nota={6.5} />
        </div>
        <div className="imagem">
          <img src={reactLogo} alt="Logo do React" className="logo" />
        </div>
      </section>

      <section className="produtos">
        <h2>Produtos</h2>
        <p>
          Cada card é um componente Produto. O Headset está indisponível para
          testar o ternário.
        </p>
        <div className="grade">
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
    </div>
  )
}

export default App
