import React from "react";

export const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <form className="contact">
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellidos"></input>
                <input type="text" placeholder="Email"></input>
                <textarea placeholder="Motivo de contacto"></textarea>
            </form>
            </div>
    )
}

export default Contact; 