import "./InformacionHotelDos.css";
import Titulo from "./Titulo";
import Parrafo from "./Parrafo";

function InformacionHotelDos({ logo }) {
  return (
    <div className="informacion-hotel-dos">
      
      <Titulo texto="Titulo del Hotel"></Titulo>
      <Parrafo texto="Historia del hotel una parrafo"></Parrafo>
      <button>ESto es un Boton</button>
    </div>
  );
}

export default InformacionHotelDos;
