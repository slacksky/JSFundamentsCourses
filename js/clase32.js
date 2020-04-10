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


obtenerPersonaje(1)
  .then(function (person){
    console.log(`Hola soy ${person.name}`)
  })
  .catch(onError)
