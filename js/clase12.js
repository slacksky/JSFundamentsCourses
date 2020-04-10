var jorge = {
  nombre: 'jorge',
  apellido:'vivas',
  edad: 30,
  ingeniero:true,
  cocinero:false,
  cantante:false,
  dj:false,
  guitarrista:false,
  drone:true
}
var natalia = {
  nombre: 'natalia',
  apellido:'paez',
  edad: 3,
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)
  if(persona.ingeniero){//you ca use the === to compare but since it has to be true with the value is enough
    console.log('Ingeniero')
  }else {
    console.log('No es Ingeniero')
  }
  if(persona.cocinero){//lang is case sentive
      console.log('Cocinero')
    }else {
      console.log('No es Cocinero')
    }
  if(persona.cantante){
        console.log('Cantante')
    }else {
      console.log('No es Cantante')
    }
  if(persona.dj){
        console.log('Dj')
    }else {
      console.log('No es Dj')
    }
  if(persona.guitarrista){
          console.log('Guitarrista')
    }else {
      console.log('No es Guitarrista')
    }
  if(persona.drone){
          console.log('Piloto de Drones')
    }else {
      console.log('No es Piloto de Drones')
    }
}

const MAYORIA_DE_EDAD = 18 // ejemplo de una constante


//const esMayorDeEdad = function (persona){//arrow function-> se puede definir como var pero es mejor como constante
/*const esMayorDeEdad = (persona) => {//ejemplo del arrow function como es una sola se pueden quitar los parentesis
  return persona.edad >= MAYORIA_DE_EDAD//ejemple de return
}*///persona
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD //ejemplo aun mas reducido, no se necesitna las llaves ya que solo hay una linea de return
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD //version desestructutrada, extrea la edad

function imprimirSiEsMayorDeEdad(persona){
  if(esMayorDeEdad(persona)){//simplificacion a true or false
    console.log('puedes tomar cerveza, pero no conduzcas')
  }else {
    console.log('no mijo estas muy chiquito para una birra')
  }
}


function permitirAcceso(persona){
  if(!esMayorDeEdad(persona)){
    console.log('Acceso denegado')
  }else{
    console.log('Acceso concedido')
  }
}

//imprimirSiEsMayorDeEdad(jorge)
//imprimirSiEsMayorDeEdad(natalia)

//reto pendinete //haccer un arrowfunction con es menor de edad
