import "./CaracteristicasCuartos.css";
import Titulo from "./Titulo";
import Parrafo from "./Parrafo";
import TarjetaHabitacion from "./TarjetaHabitacion";

function CaracteristicasCuartos({logo}) {
  return (
    <div>
      <Titulo texto="Titulo de las fichas de los cuartos"></Titulo>
      <Parrafo texto="Caracteristicas de las habitaciones Deslizantes"></Parrafo>
      
      <TarjetaHabitacion logo={logo}></TarjetaHabitacion>
      <TarjetaHabitacion logo={logo}></TarjetaHabitacion>
      <TarjetaHabitacion logo={logo}></TarjetaHabitacion>
      <TarjetaHabitacion logo={logo}></TarjetaHabitacion>
      <TarjetaHabitacion logo={logo}></TarjetaHabitacion>

    </div>
  );
}

export default CaracteristicasCuartos;
