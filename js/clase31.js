//usaremos jquery to call swapi
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL='people/:id'
//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
//const onPeopleResponse =

function obtenerPersonaje(id, callback){
  const url=`${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $
  .get(url,opts, callback)
  .fail(()=>{
    console.log(`Sucedio un error. El personaje no llego ${id}`)
  })//callback funtion se llama una vez se complete el request
}
obtenerPersonaje(1, function (person){
  console.log(`Hola soy ${person.name}`)
  obtenerPersonaje(2, function (person) {
    console.log(`Hola soy ${person.name}`)
    obtenerPersonaje(3, function (person){
      console.log(`Hola soy ${person.name}`)
    })
  })
})
