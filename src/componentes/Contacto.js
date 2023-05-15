import "./Contacto.css";
import Parrafo from "./Parrafo";

function Contacto({ logo, texto }) {
  return (
    <div className="contacto-flex">
      <img src={logo} className="App-logo" alt="logo" />
      <Parrafo texto={texto}></Parrafo>
    </div>
  );
}

export default Contacto;
