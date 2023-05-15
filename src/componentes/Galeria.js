import "./Galeria.css"

function Galeria({ logo }) {
  return (
    <div>
      <p>Galeria</p>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Galeria;