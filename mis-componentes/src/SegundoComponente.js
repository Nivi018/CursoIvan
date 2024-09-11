import React from "react";

export const SegundoComponente = () => {
  let nombre = "Ivan";
  let web = "http://Ivan0101Diaz/DV.com";

  //Declariacion de objetos
  let usuario = {
    nombre: "Ivan",
    apellido: "Diaz",
    edad: 21,
    ciudad: "Libres",
  };

  //Imprimirndo en consola
  console.log(usuario);

  return (
    <div>
      <hr />
      <h2>Datos del usuario</h2>
      <ul>
        <li>Nombre: {nombre} </li>
        <li>Sitio web: {web}</li>
      </ul>
      <hr />

      <h2>Datos de un objeto</h2>
      <ul>
        <li>
          Nombre: <strong>{usuario.nombre}</strong>
        </li>
        <li>
          Apellido: <strong>{usuario.apellido}</strong>
        </li>
        <li>
          Ciudad: <strong>{usuario.ciudad}</strong>
        </li>
        <li>
          Edad: <strong>{usuario.edad}</strong>
        </li>
      </ul>
    </div>
  );

  return <div>SegundoComponente</div>;
};
