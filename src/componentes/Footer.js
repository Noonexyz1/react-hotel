//El logo debo enviarlos desde App.js porque react no te permite
//importarlo como si nada.
import "../App.css";
import "./Footer.css";

function Footer({logo}){
    return(
        <footer>
        <div>
          <img src={logo} className="App-logo" alt="logo" />

          <p>Numero de telefono:</p>
        </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Email:</p>
        </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />

          <p>Direccion</p>
        </div>
      </footer>
      
    );
}

export default Footer;

