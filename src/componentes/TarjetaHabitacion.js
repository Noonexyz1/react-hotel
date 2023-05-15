import "./TarjetaHabitacion.css";
import Titulo from "./Titulo";
import TituloDos from "./TituloDos";
import Parrafo from "./Parrafo";

function TarjetaHabitacion({logo}){
    return(
<div className="caracteristicas-cuartos-flex">
        <div>
          <Titulo titulo="Titulo de la habitacion 1"></Titulo>
          <TituloDos titulo="Caracteristicas de la habitacion"></TituloDos>
          
          <Parrafo texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            commodi inventore ea ut ab sunt?"></Parrafo>
          
        </div>
        <div>
          <img src={logo} className="App-logo" alt="" />
        </div>
      </div>
    );
}

export default TarjetaHabitacion;