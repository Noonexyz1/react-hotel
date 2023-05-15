//El logo debo enviarlos desde App.js porque react no te permite
//importarlo como si nada.
//import logo from "../../logo.svg"
import "../App.css";
import "./Section.css";

//import TituloDos from "./TituloDos";
import Formulario from "./Formulario";
import InformacionHotel from "./InformacionHotel";
import InformacionHotelDos from "./InformacionHotelDos";
import Galeria from "./Galeria";
import CaracteristicasCuartos from "./CaracteristicasCuartos";

//Falta la imagen del panel central de bienvenida
//falta los Comentarios.js
function Section({logo}) {
  return (
    <section className="seccion-flex">

      <Formulario></Formulario>

      <InformacionHotel logo={logo}></InformacionHotel>

      <Galeria logo={logo}></Galeria>
      

      <InformacionHotelDos logo={logo}></InformacionHotelDos>


      <CaracteristicasCuartos logo={logo}></CaracteristicasCuartos>

      
     
    </section>
  );
}

export default Section;
