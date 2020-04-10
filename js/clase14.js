var jorge = {
  nombre: 'jorge',
  apellido:'vivas',
  edad: 30,
  peso:78
}
console.log(`Al inicio de año ${jorge.nombre} pesaba ${jorge.peso.toFixed(1)} Kg`);

const DELTA_PESO=0.3
const DIAS_365=365
const aumentarDePeso = persona =>  persona.peso += DELTA_PESO
const perderPeso = persona =>  persona.peso -= DELTA_PESO
const gula = () => Math.random() < 0.3
const ejercicio = () => Math.random() < 0.4
//arriba hay do funciones flecha sin parametro

//const para que sea contante nombre de la funcion=(parametros)=> codigo de ejecucion si es una sola linea y retorno

const META = jorge.peso - 3
var dias = 0
while(jorge.peso>META ) {

  if(gula()){
    aumentarDePeso(jorge)
  }if(ejercicio()){
    perderPeso(jorge)

  }
  dias++
  if(dias>DIAS_365){
    console.log("no lo logro a tiempo")
    break

  }


}

console.log(` ${dias} dias transcurridos haste que ${jorge.nombre} logro bajar los 3 Kg`);
//clase15repdo-while
