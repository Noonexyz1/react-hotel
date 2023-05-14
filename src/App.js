import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      <section>
        <div>Formularios</div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Ttitlo del Hotel</h1>
          <p>Historia del hotel</p>

          <img src={logo} className="App-logo" alt="logo" />
          <p>Nombre del dueño</p>
        </div>

        <div>
          <p>Galeria</p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div>
          <p>Caracteristicas de las habitaciones Deslizantes</p>

          <div>
            <div>
              <h2>Titulo de la habitacion 1</h2>
              <h3>Caracteristicas de la habitacion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                commodi inventore ea ut ab sunt?
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <div>
              <h2>Titulo de la habitacion 2</h2>
              <h3>Caracteristicas de la habitacion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                commodi inventore ea ut ab sunt?
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <div>
              <h2>Titulo de la habitacion 3</h2>
              <h3>Caracteristicas de la habitacion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                commodi inventore ea ut ab sunt?
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>

          <div>
            <div>
              <h2>Titulo de la habitacion 4</h2>
              <h3>Caracteristicas de la habitacion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                commodi inventore ea ut ab sunt?
              </p>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h2>Lista de Testimonios de las personas</h2>
          <div>
            <img src="" alt="" />
            <h2>Nombre de Usuaior</h2>
            <h3>Pequeno comentario..</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              distinctio voluptatibus blanditiis laborum, obcaecati commodi.
            </p>
          </div>
        </div>
      </section>

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
      
    </div>
  );
}

export default App;
