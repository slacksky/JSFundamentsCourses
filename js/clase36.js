//usaremos jquery to call swapi
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL='people/:id'
//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
//const onPeopleResponse =

function obtenerPersonaje(id){
  return new Promise( (resolve, reject) => {
    const url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url,opts, function (data){
      resolve(data)
    })
    .fail(()=> reject(id) )

  })

}

function onError(id){
  console.log(`Ocurrio un error con el personaje id:${id}`)
}

async function obetnerPersonajes (){//funcion asyncrona para poder usar el await
  var ids = [1,2,3,4,5,6,7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promesas)//parada de ejecucion por <await>
    console.log(personajes)
  }catch(id){
    onError(id)
  }//necesarit combo try-catch
}//

obetnerPersonajes()



/*
obtenerPersonaje(1)
  .then(person => {
    console.log(`Hola soy ${person.name}`)
    return obtenerPersonaje(2)
  })
  .then(person => {
    console.log(`Hola soy ${person.name}`)
    return obtenerPersonaje(3)
  })
  .then(person => {
      console.log(`Hola soy ${person.name}`)
  })
  .catch(onError)
*/
