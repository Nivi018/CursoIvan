import React from 'react'

export const TercerComponente = ({nombre,apellido, ficha}) => {
    

    const libros= ["Harry Potter", "Hielo y fuego", "Crepusculo"];
  return (
    <div>
        <h2>Mis libros favoritos</h2>

        <ul>
            <li>{libros[0]}</li>
            <li>{libros[1]}</li>
            <li>{libros[2]}</li>
        </ul>

        <hr/>

        <h2>Libros Leidos</h2>
        <ul>
            {
                libros.map((libro, indice)=>{
                    return <li key={indice}>{libro}</li>
                })


            }
        </ul>
        <hr/>

        <h2>Ficha Medica</h2>
        <ul>
            <li><strong>Nombre:</strong> {nombre}</li>
            <li>Apellido: {apellido}</li>
            <li>Alergias: {ficha.alergias}</li>
            <li>Tipo de sangre: {ficha.grupoSangre}</li>
            <li>Estado de salud: {ficha.estadoSalud}</li>
            <li>Altura: {ficha.altura}</li>
            
        </ul>
    </div>
  )
}
