import './App.css';
import FormSeller from './componentes/FormSeller';
import FormLogin from './componentes/FormLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          <h1>PetCare</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Serviços</a>
            <a href="#">Agendar</a>
            <a href="#">Contato</a>
          </nav>
        </header>

        <main>
          <h2>Cuide do seu melhor amigo com carinho e confiança</h2>
          <p>
            PetCare oferece serviços completos para garantir saúde, conforto e felicidade ao seu pet — veterinária, banho, tosa e muito mais.
          </p>
          <a href="#" class="btn">Agende uma Consulta</a>
        </main>

        <footer>
          &copy; 2025 PetCare - Todos os direitos reservados
        </footer>
      </header><br/>
      <FormLogin/>
    </div>
  );
}

export default App;
