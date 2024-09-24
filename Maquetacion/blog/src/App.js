import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Listado } from './Componentes/Listado';
import { Buscador } from './Componentes/Buscador';
import { Crear } from './Componentes/Crear';

class App extends Component {
  render() {
  return (
    <div className="layout">
        {/*Cabezera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>Mis peliculas</h1>


        </header>
        
        {/*Navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        
        { /*Contenido Aplicacion*/}
        <section id="content" className="content">
        <Listado/>

        </section>

        
        
        {/*Barra Lateral*/ }
        <aside className="lateral">
        <Buscador/>

        <Crear/>
        
        </aside>
        
        {/*Pie de Pagina*/ }
        <footer className="footer">
            &copy; Curso de Programacion II
            
        </footer>
        
    </div>
  );
}
}
  

export default App;
