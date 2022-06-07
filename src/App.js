import logo from './check-icone-1-scaled.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           Pagamento aprovado!!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui para baixar os videos.
        </a>
      </header>
    </div>
  );
}

export default App;
