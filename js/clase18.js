var jorge ={
  nombre:'Jorge',
  apellido:'Vivas',
  altura:1.72
}
var anyela ={
  nombre:'Anyela',
  apellido:' de Vivas',
  altura:1.60
}

var luis ={
  nombre:'Luis',
  apellido:' Vivas',
  altura:1.90
}

//const esAlta = persona => persona.altura>1.8 //va a recibir  los elementos del array, e iterara interanmente
const esBaja = persona => persona.altura<1.8
var personas = [jorge,anyela, luis]
//var personasAltas =  personas.filter(esAlta)
var personasBajas =  personas.filter(esBaja)
//console.log(personasAltas)
console.log(personasBajas)
