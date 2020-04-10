//usaremos jquery to call swapi
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL='people/:id'
const SHIPS_URL='starships/10/'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
const onPeopleResponse = function (person){
  console.log(`Hola soy ${person.name}`)
}

$.get(lukeUrl,opts, onPeopleResponse )//callback funtion se llama una vez se complete el request
