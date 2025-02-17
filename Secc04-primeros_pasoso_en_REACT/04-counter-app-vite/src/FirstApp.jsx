// import React from 'react';
// import PropTypes from 'prop-types';

// export const FirstApp = ({ title, subTitle }) => {
//   console.log("Componente FirstApp renderizado");

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{subTitle}</p>
//     </div>
//   );
// };

// // Validación de las props
// FirstApp.propTypes = {
//   title: PropTypes.string,  // Prop `title` no es obligatoria
//   subTitle: PropTypes.string,  // Prop `subTitle` tampoco es obligatoria
// };

// // Valores predeterminados para las props
// FirstApp.defaultProps = {
//   title: "como no vino ningun titulo, ESTE LO SERA X DEFECTO",
//   subTitle: "Subtítulo predeterminado",  // Valor por defecto para `subTitle`
// };





// import React from 'react';

// export const FirstApp = () => {
//   console.log("Componente FirstApp renderizado");

//   return (
//     <div>
//       <h1>Test</h1>
//       <p>Este es un renderizado básico</p>
//     </div>
//   );
// };



import React from 'react';

export const FirstApp = ({ title, subTitle }) => {
  console.log("Componente FirstApp renderizado");

  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

// Valores por defecto para las props
FirstApp.defaultProps = {
  title: "como no vino ningun titulo, ESTE LO SERA X DEFECTO",
  subTitle: "Este subtítulo es por defecto también",
};

