import { useState } from 'react';//importo de rect el hook (function) useState
import React from 'react';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    //console.log(event);
    setCounter( counter + 1);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

// Valores por defecto para las props
CounterApp.defaultProps = {
  Contador1: "como no vino ningun titulo, ESTE LO SERA X DEFECTO",
  Contador2: "Este subtítulo es por defecto también",
};
