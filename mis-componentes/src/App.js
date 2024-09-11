import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { PrimerComponente } from './PrimerComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

 

class App extends Component {
  render() {


    /*Declaracion de objetos */
  const ficha_medica= {
    altura: "187 cm",
    grupoSangre: "B+",
    estadoSalud: "bueno",
    alergias: "ninguna"
  };



  return (
    <div className="App">
      <div className="App-header">
        <PrimerComponente/>
      </div>
      <SegundoComponente/>
        <hr/>
        <TercerComponente 
        nombre ="Lupe" 
        apellido="Juarez"
        ficha= {ficha_medica}/>

    </div>
    );
  }
}

export default App;
