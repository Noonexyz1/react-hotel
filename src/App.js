import logo from "./logo.svg";
import "./App.css";
import Header from './componentes/Header';
import Section from './componentes/Section';
import Footer from './componentes/Footer';


//<Header logo={logo} title="Título del sitio web" color="#333"></Header>
/*function Header({logo, title, color}) {
  return (
    <header style={{backgroundColor: color}}>
      <img src={logo} alt="Logo del sitio web" />
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}*/

/*function Header(props) {
  const { logo, title, color } = props;

  return (
    <header style={{ backgroundColor: color }}>
      <img src={logo} alt="Logo" />
      <h1>{title}</h1>
    </header>
  );
}*/





function App() {
  return (
    <div className="App">
      
      <Header logo={logo}></Header>
      
      <Section logo={logo}></Section>
      
      <Footer logo={logo}></Footer>
      
    </div>
  );
}

export default App;
