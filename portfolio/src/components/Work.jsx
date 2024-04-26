import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { works } from "../data/works";

export const Work = () => {
    const [projectState, setProject] = useState({})
    const params = useParams(); 

    useEffect(() => {
        let project = works.filter(work => work.id === params.id)
        //es importante tener un estado para poder acceder a los datos
        setProject(project[0]);  
    },[]);
    return (
        <div className="page page-work">
            <div className="mask">
                <img src={"/images/"+ projectState.id + ".png"}/>
            </div>
            <h1 className="heading">{projectState.nombre}</h1>
            <p>{projectState.stack}</p>
            <p>{projectState.descripcion}</p>
            <a href={"https://"+projectState.url}>Ir al proyecto</a>
        </div>
    )
}

export default Work; 