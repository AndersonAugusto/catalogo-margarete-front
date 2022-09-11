import React from "react";
import './catalogo.scss'

const Catalogo = ( props ) => {

    return (
        <div className="container-catalogo">
            <div className="capa-catalogo">
                <img src={ props.url } alt="capa" />
            </div>
            <div className="description">
                <h3> { props.Titulo } </h3>
                <p> { props.Description } </p>
            </div>
        </div>
    )
}
export default Catalogo