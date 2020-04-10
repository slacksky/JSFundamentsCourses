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

function imprimirSiEsMayorDeEdad(persona){
  if(persona.edad>=18){
    console.log('puedes tomar cerveza, pero no conduzcas')
  }else {
    console.log('no mijo estas muy chiquito para una birra')
  }
}

imprimirProfesiones(jorge)
imprimirSiEsMayorDeEdad(jorge)
