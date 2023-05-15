//El logo debo enviarlos desde App.js porque react no te permite
//importarlo como si nada.
//import logo from "./logo.svg"

import "../App.css";
import "./Header.css";
import Enlace from "./Enlace";

function Header({logo}) {
  return (
    <header className="fondo-rojo-flex">
      
      <img src={logo} className="App-logo logo-bk" alt="logo" />
      
      
      <nav className="nav-flex">


        <Enlace enlace="#" texto="Inicio"></Enlace>
        <Enlace enlace="#" texto="Cuartos"></Enlace>
        <Enlace enlace="#" texto="Ubicacion"></Enlace>
        <Enlace enlace="#" texto="Contactos"></Enlace>
        <Enlace enlace="#" texto="Mas..."></Enlace>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </nav>
    </header>
  );
}

export default Header;
