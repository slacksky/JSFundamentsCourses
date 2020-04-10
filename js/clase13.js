var jorge = {
  nombre: 'jorge',
  apellido:'vivas',
  edad: 30,
  peso:78
}
console.log(`Al inicio de año ${jorge.nombre} pesaba ${jorge.peso.toFixed(1)} Kg`);

const DELTA_PESO=0.2
const DIAS_365=365
const aumentarDePeso = persona =>  persona.peso += DELTA_PESO
const perderPeso = persona =>  persona.peso -= DELTA_PESO
//const para que sea contante nombre de la funcion=(parametros)=> codigo de ejecucion si es una sola linea y retorno

for(var i = 0; i <=DIAS_365; i++){
  var random = Math.random()//entre 0 y 1, librerias empiezan en mayusculas y no olvidar los parentesis!!
  if (random<0.25){
    aumentarDePeso(jorge)
  }else if (random<0.5){
    perderPeso(jorge)
  }
}//como estamos pasando un obejeto este cambia al pasar por la funcion, para que no pase habria que desglosarlo


console.log(`Al final del año ${jorge.nombre} pesaba ${jorge.peso.toFixed(1)} Kg`);


//clase14repWhile crear archivos
