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
var personas = [jorge,anyela, luis]

//const pasarAlturaACms = persona => persona.altura*=100
/*map correar por el array y actualizara usando una funcion
 que le pasemos como parametro, el resultado es que las alturas
 quedaron en cm*/
 /*version sin modificar*/
/*const pasarAlturaACms = persona => {
  return{
    ...persona,//desgloce del array
    altura: persona.altura*100//pisado y actualizacion del nuevo obj
  }
}*/
const pasarAlturaACms = persona => ({

    ...persona,//desgloce del array
    altura: persona.altura*100//pisado y actualizacion del nuevo obj

})//se uas parentesis para se;alar que se retorna




var personasCms =  personas.map(pasarAlturaACms)




//const esAlta = persona => persona.altura>1.8 //va a recibir  los elementos del array, e iterara interanmente
const esBaja = persona => persona.altura<1.8

//var personasAltas =  personas.filter(esAlta)
var personasBajas =  personas.filter(esBaja)
//console.log(personasAltas)
console.log(personasCms)


//clase 20 reducir un array a un valor
