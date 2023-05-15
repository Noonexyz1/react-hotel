import "./Enlace.css"

function Enlace({enlace, texto}){
    return(
        <a href={enlace} className="enlace">{texto}</a>
    );
}

export default Enlace;


