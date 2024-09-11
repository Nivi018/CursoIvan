import React, { useState } from 'react'

export const MiEstado1 = () => {
/*
    let nombre= "Manuel Hernandez";
    const cambiarNombre = (e) => {
        nombre = "Isaac";
    }*/

    const [nombre, setNombre] = useState("Manuel Hernandez");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        
        <h3>Componente: Mi Estado </h3>
        <p>Mi nombre es: <strong>{nombre}</strong></p>

        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <input type='text' placeholder='Cambiar nombre'onKeyUp={e => cambiarNombre(e, e.target.value)}/>

    </div>
  )
}
