// const heroes = [
//     {        id: 1,        name: 'Batman',       owner: 'DC'    },
//     {        id: 2,        name: 'Spiderman',    owner: 'Marvel'},
//     {        id: 3,        name: 'Superman',     owner: 'DC'    },
//     {        id: 4,        name: 'Flash',        owner: 'DC'    },
//     {        id: 5,        name: 'Wolverine',    owner: 'Marvel'},
// ];

// const getHeroeById = (id) => {//la función de flecha getHeroeById recibe un parámetro id

//     //.find() recorre el array y devuelve el 1° elemento que cumpla con la condición que le pasamos.
//     // find() recibe un parámetro llamado cadaElementoDelArray, que representa cada elemento del arreglo en la iteración.
// return heroes.find((cadaElementoDelArray) => {
//              return cadaElementoDelArray.id === id;// verifica si el id del héroe (cadaElementoDelArray.id) es igual al id 
//                                               // que le pasamos como argumento a la función getHeroeById.
// });
// };

//----------------------------------------------
// const mipromesa = new Promise ( (resolve, reject) => {
//     setTimeout( ()=> {       
//           const heroequerecibo = getHeroeById(2);// llama a la función getHeroeById(2), que busca el héroe con ID 2 en el arreglo heroes
//        resolve(heroequerecibo); //El valor que devuelve getHeroeById(2) se guarda en la constante heroequerecibo. 
//                                                         // Esto será el valor que vamos a resolver en la promesa.

//         reject('no se puedo encontrar el heroe')
//     }, 3000)
// });

// //cuando la promesa mipromesa se cumpla uso then y catch (y menos importante el finally, q se ejecuta despues del then o el catch)
// //Aquí se usa el método then() de la promesa mipromesa.
// //then() se ejecuta cuando la promesa se resuelve con éxito (cuando se llama a resolve() dentro de la promesa).
// mipromesa
//     .then( (recibiheroedelresolve) => {//El parámetro recibiheroedelresolve es el valor que pasamos a resolve(), es decir, el héroe encontrado("Spiderman").
//         console.log("THEN de la promesa", recibiheroedelresolve)
//     })
//     .catch(muestroelerror => console.warn( muestroelerror ));



// const usoAsyncConHeroe = (id) => {//la función usoAsyncConHeroe recibe un parámetro llamado id, que es el identificador del héroe que estamos buscando.

//     // se retorna una nueva promesa (new Promise). La promesa acepta una función de callback con 2 parámetros: resolve y reject.
//     return new Promise ( (resolve, reject) => {//retorno mi romesa para poder HABILITAR el uso de TEHN y CATCH

//         setTimeout( ()=> {       
//               const heroequerecibo = getHeroeById(id);// llama a la función getHeroeById(id),cuya función recibe el id como argumento
//                                                           //  y devuelve el héroe correspondiente (o undefined si no lo encuentra).

//            if (heroequerecibo){//i heroequerecibo tiene un valor (es decir, si la función getHeroeById(id) encontró un héroe). 
//            // Si es así, la condición es true y ejecutará el bloque de código dentro de este if

//               resolve(heroequerecibo); //El valor que devuelve getHeroeById(2) se guarda en la constante heroequerecibo. 
//             }else {
//                 reject('no se puedo encontrar el heroe')
//             }             
//         }, 3000)
//     });
// };
//    // Llamamos a la función usoAsyncConHeroe con el id 4
// usoAsyncConHeroe(4)
// .then(heroe => console.log('Heroe encontrado:', heroe)) // Muestra el héroe si se resuelve
// .catch(error => console.error(error)); // Muestra el error si la promesa se rechaza




//codigo, para que si no encuentra al heroe ejecute un reject ##############################################################
const heroes = [ 
    { id: 1, name: 'Batman', owner: 'DC' },
    { id: 2, name: 'Spiderman', owner: 'Marvel' },
    { id: 3, name: 'Superman', owner: 'DC' },
    { id: 4, name: 'Flash', owner: 'DC' },
    { id: 5, name: 'Wolverine', owner: 'Marvel' },
];

const getHeroeById = (id) => {
    // Usamos .find() para buscar el héroe por su id
    return heroes.find((cadaElementoDelArray) => {
        return cadaElementoDelArray.id === id;
    });
};

const usoAsyncConHeroe = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroequerecibo = getHeroeById(id); // Llamamos a getHeroeById con el id recibido

            if (heroequerecibo) {
                // Si el héroe fue encontrado, resolvemos la promesa
                resolve(heroequerecibo);
            } else {
                // Si no encontramos el héroe, rechazamos la promesa
                reject('No se pudo encontrar el héroe con id ' + id);
            }
        }, 2000); // Retardamos la ejecución para simular un proceso asíncrono
    });
};

// Llamada de ejemplo: buscando un héroe con id 4
usoAsyncConHeroe(3)
    .then(heroe => console.log('Héroe encontrado:', heroe))
    .catch(error => console.error(error)); // Muestra el error si la promesa es rechazada

// Llamada de ejemplo: buscando un héroe con un id que no existe
usoAsyncConHeroe(10)
    .then(heroe => console.log('Héroe encontrado:', heroe))
    .catch(error => console.error(error)); // Mostrará "No se pudo encontrar el héroe con id 10"
