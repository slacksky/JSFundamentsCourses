var jorge = {
  nombre: 'jorge',
  apellido:'vivas',
  edad: 30

}
var anyela = {
  nombre: 'anyela',
  apellido:' de vivas',
  edad: 31

}

function imprimirNombreEnMayusculas(persona){
  //var nombre=persona.nombre <solo que es ete caso es desglosado >
  var {nombre} = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreyEdad(persona){

  var {nombre} = persona;
  var {edad} = persona;
  var {apellido} = persona;
  console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} ciclos` );
}

/*function cumple(persona){
  persona.edad += 1;
}*/ //modificacion direct
function cumple(persona){
  return{
    ...persona,
    edad: persona.edad +1
  }//metodo por desgloce y return, no modifica el objeto
}




imprimirNombreEnMayusculas(jorge);
imprimirNombreEnMayusculas(anyela);
imprimirNombreyEdad(jorge);
imprimirNombreyEdad(anyela);
