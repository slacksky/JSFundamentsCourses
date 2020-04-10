function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function (){}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo//esta linea genera la herencia de la clase claseHija
}//funcion genera herencia


function Persona(nombre,apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}//esta funcion es el contructor de la clase?
Persona.prototype.saludar =  function()  {
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}//saludar

/*Persona.prototype.soyAlto = function() {

  return this.altura >1.8
}*/
//al prototipo o clase se puede modificar durante el trabajo pero
//es mejor dejarlo listo desde el inicio
//arrow functions dont work they seem to not pass the parameters
//al usar arrow function por alguna razon pasa como obejeto al window
//es decir el objeto global? y por tanto genera unadefined
//error comun?
//las arrow function apuntan al this fuera de la funcion es decir el objeto global
// por el momento no udsar arrow functions para objetos y this

/*crear prototipo hijo  llamado desarrollador clase de herencia*/
function Desarrollador(nombre, apellido){
  this.nombre=nombre
  this.apellido=apellido
}

heredaDe(Desarrollador, Persona)//la herrencia debe ir antes o sino la funcion vuele a default

Desarrollador.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y desarrollo java script`)
}//funcion pisada



//var jorge = new Persona('jorge', 'vivas', 1.92)
//jorge.saludar()
//jorge.soyAlto()
//var anyela = new Desarrollador('anyela', 'de vivas', 1.65)
//new es reservada para crear obejtos ejecutando contructores
//new hace un return inplicito de (this)
//es decir return this dentro de la funcion
//tarea pasara altura y agregar una funcion donde la persona diga si es alto
