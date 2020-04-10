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
//se puede pasar el parametro somo solo el nombre del objeto o desglosarlo en los input de la function
function imprimirNombreEnMayusculas({nombre}){

  console.log(nombre.toUpperCase());
}
imprimirNombreEnMayusculas(jorge);
imprimirNombreEnMayusculas(anyela);
imprimirNombreEnMayusculas({nombre:'bebucky'});
