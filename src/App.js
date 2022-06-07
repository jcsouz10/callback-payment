import logo from './check-icone-1-scaled.png';
import './App.css';
import Helmet from 'react-helmet'

function App() {
  return (
    <>
    <Helmet>
    <script>
      {
        `
        gtag('event', 'conversion', {
          'send_to': 'AW-10929487058/7GhtCKmB5cMDENL5ytso'
        })
        `
      }
    </script>

    </Helmet>
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
    </>
  );
}

export default App;
