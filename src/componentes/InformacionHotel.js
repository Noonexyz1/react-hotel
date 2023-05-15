import "./InformacionHotel.css";

import Titulo from "./Titulo";
import Parrafo from "./Parrafo";

function InformacionHotel({ logo }) {
  return (
    <div className="informacion-hotel">
      <img src={logo} className="App-logo" alt="logo" />
      <Titulo texto="Titulo del Hotel"></Titulo>
      <Parrafo texto="Historia del hotel una parrafo"></Parrafo>
      <img src={logo} className="App-logo" alt="logo" />
      <Parrafo texto="Nombre del dueño"></Parrafo>
    </div>
  );
}

export default InformacionHotel;