import logo from './logo.svg';
import './App.css';
import { MiEstado1 } from './componentes/MiEstado1';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Esatdos e React</h2>
      </header>

      <h2>Hook useState</h2>
      <p>Un hook es una funcion especial que permite hacer algo</p>
      <MiEstado1 />
    </div>
  );
}

export default App;
