import React from "react";

export const Contact = () => {
    return(
        <div className="page">
            <h1 className="heading">Contact</h1>
            <form className="contact">
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellidos"></input>
                <input type="text" placeholder="Email"></input>
                <textarea placeholder="Motivo de contacto"></textarea>
                <input type="submit" placeholder="Enviar"></input> 
            </form>
            </div>
    )
}

export default Contact; 