import React, { useState } from 'react'

export const Crear = () => {
    const tituloComponente= "Añadir Componente";
    const [pelisState, setPelisState] = useState ({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion}= pelisState;

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();
       let target = e.target;
       //conseguir datos formulario
       let titulo= target.titulo.value;
       let descripcion= target.descripcion.value;

       //crear el objeto a guardar
       let peli ={
        id: new Date().getTime(),
        titulo,
        descripcion
       }

       setPelisState(peli);
       console.log(pelisState);

       
       //guardar en el almacenamiento local
       guardarEnStorage(peli);
       //limpiar formulario
       target.reset();
       //alert(titulo + " " + descripcion);
    }

    const guardarEnStorage = peli => {
        //guardar peliculas en el alamacenamineto local
       localStorage.setItem('pelis', JSON.stringify([peli]));
    } 


  return (
    <div>
        <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <form onSubmit={conseguirDatosFormulario}>
                    <input 
                        type="text" 
                        id="titulo" 
                        name='titulo'
                        placeholder="Titulo"/>

                    <textarea 
                        id="descripcion" 
                        name='descripcion'
                        placeholder="Descripcion">
                    </textarea>

                    <input 
                        type="submit" 
                        id="save" 
                        value="Guardar"/>
                </form>
            </div>
    </div>
  )
}
