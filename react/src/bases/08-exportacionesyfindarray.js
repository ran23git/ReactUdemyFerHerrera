import { heroes } from "../src/data/archivoheroes.js";

            //se define una función de flecha (arrow function) llamada getHeroeById, que recibe un argumento llamado id. 
            // Este id es el valor que se utilizará para buscar un héroe dentro del arreglo de heroes.
const getHeroeById = (id) => {

            //.find() recorre el array y devuelve el 1° elemento que cumpla con la condición que le pasamos.
            // find() recibe un parámetro llamado cadaElementoDelArray, que representa cada elemento del arreglo en la iteración.
    return heroes.find((cadaElementoDelArray) => {
                 return cadaElementoDelArray.id === id;// verifica si el id del héroe (cadaElementoDelArray.id) es igual al id 
                                                      // que le pasamos como argumento a la función getHeroeById.
    });
};

console.log(getHeroeById(2));

