import logo from './logo.svg';
import './App.css';

function App() {
const mensaje ="Este es un mensaje";
let a=5,b=6,c=0;

  return (
    <div className="App">
      <h1>Es un h1</h1>
      <header className="App-header">
      <h1>Es un h2</h1>
      <body>
      <p>este es un parrafo {mensaje} </p>
      <p>numero 1: {a} </p>
      <p>numero 2: {b} </p>
      <p>Suma: {a+b} </p>
      </body>
      </header>
    </div>
  );
}

export default App;
