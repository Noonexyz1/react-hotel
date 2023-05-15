import "./Formulario.css"

function Formulario(){
    return(
        <form className="formulario-flex">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />

            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" />

            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;
