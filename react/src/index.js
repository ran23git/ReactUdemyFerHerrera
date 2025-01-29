const apiKey = '0W6tCJ7ncPpwe26Jk0jt77VfNOn4Gs5X';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//como fetch es una PROMESA puedo usar el THEN
peticion.then( resp => {
    resp.json().then( data =>{ 
        console.log(data)
    })
})
.catch( console.warn );