const  saludar =  function( nombre) {
    return `hola, ${ nombre }`;
}

const  saludar2 =  ( nombre)=> {
    return `hola, ${ nombre }`;
}

const  saludar3 =  ( nombre) => {`hola, ${ nombre }`;}

console.log(saludar2( "jorge"));