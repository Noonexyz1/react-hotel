//El logo debo enviarlos desde App.js porque react no te permite
//importarlo como si nada.
import "../App.css";
import "./Footer.css";
import Contacto from "./Contacto";

function Footer({ logo }) {
  return (
    <footer className="footer-flex">
      <Contacto logo={logo} texto="Numero de telefono"></Contacto>
      <Contacto logo={logo} texto="Correo Electronico"></Contacto>
      <Contacto logo={logo} texto="Direccion del hotel"></Contacto>
    </footer>
  );
}

export default Footer;
