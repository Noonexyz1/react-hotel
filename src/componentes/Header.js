//El logo debo enviarlos desde App.js porque react no te permite
//importarlo como si nada.
//import logo from "./logo.svg"

import "../App.css";
import "./Header.css";

function Header({logo}) {
  return (
    <header className="App-header fondo-rojo">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />

        <a href="·">Inicio</a>
        <a href="·">Cuartos</a>
        <a href="·">Ubicacion</a>
        <a href="·">Contactos</a>
        <a href="·">Mas...</a>

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
