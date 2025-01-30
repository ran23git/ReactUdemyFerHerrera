const getImagen = async () => {
    try {
        const apiKey = '0W6tCJ7ncPpwe26Jk0jt77VfNOn4Gs5X';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); //Se hace una solicitud fetch (es decir, una petición HTTP)
    //  a la API de Giphy para obtener un gif aleatorio. Usamos la palabra clave await para esperar la respuesta de la API antes de continuar 
    // con el siguiente paso. La URL está construida con la clave apiKey que obtuviste previamente.

        const { data } = await resp.json();// se obtiene el cuerpo de la respuesta en formato JSON (usando resp.json()), y se extrae la propiedad 
        // data de la respuesta. Esta propiedad contiene la información del gif aleatorio.

        const { url } = data.images.original;//Se extrae la URL del gif en su resolución original de la propiedad images.original dentro del objeto data.

        const img = document.createElement('img');//Se crea un nuevo elemento de imagen (<img>) en el documento HTML usando document.createElement.
        img.src = url;//Se asigna la URL del gif extraída anteriormente como la fuente de la imagen (img.src), lo que indica que el contenido de la imagen proviene de esa URL.
        document.body.append( img );//se agrega la imagen al cuerpo del documento HTML (document.body). Esto la muestra en la página web.

    }catch (error){
        //manejo del error, tambien se podira poner una url de una imagen
        console.error(error)
    }
    
   };

getImagen()


// 

// 

// //como fetch es una PROMESA puedo usar el THEN
// peticion
//     .then( resp => resp.json () )
//     .then( ({data}) => { 
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//         })
//     .catch( console.warn );
    