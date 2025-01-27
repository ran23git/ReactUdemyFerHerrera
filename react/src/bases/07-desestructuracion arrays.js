// const useState = ( valor ) => {
//     return [valor, ()=>{console.log('Estoy dentro de la funcion')}];
// }

// const [nombre, setNombre] = useState ( 'goku' );

// console.log( nombre );
// setNombre();

const useState = ( valor ) => { //una función llamada useState que recibe un parámetro valor.
    //El 1° elemento es el valor que pasaste como argumento (valor)
    //El 2° elemento es una función anónima que cuando se INVOQUE, va a imprimir 'Estoy dentro de la funcion' en la consola.
    return [valor, ()=>{console.log('Estoy dentro de la funcion')}];
}
//se llama a la función useState pasando como argumento el string 'goku', lo cual establece el valor inicial del estado en 'goku'.
//Usas la ----desestructuración---- para asignar
//nombre al primer elemento del arreglo retornado por useState, que será el valor 'goku'
//setNombre al segundo elemento, que es la función que imprime 'Estoy dentro de la funcion' cuando se llama.
const [nombre, setNombre] = useState ( 'goku' );
//Entonces, nombre tendrá el valor 'goku', y setNombre será una función que puedes invocar para ver ese mensaje en la consola.

console.log( nombre );
setNombre();
//Aquí llamas a la función setNombre que fue definida en la  ----desestructuración---- .
// Al invocar esta función, el código dentro de ella se ejecuta, que es un console.log('Estoy dentro de la funcion').
// Como resultado, la consola imprimirá: "Estoy dentro de la funcion"