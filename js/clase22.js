function Persona(nombre,apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}//esta funcion es el contructor de la clase?
Persona.prototype.saludar = function ()  {
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}//saludar

Persona.prototype.soyAlto = function(){
  return this.altura >1.8
}
//al prototipo o clase se puede modificar durante el trabajo pero
//es mejor dejarlo listo desde el inicio
//arrow functions dont work they seem to not pass the parameters

var jorge = new Persona('jorge', 'vivas', 1.92)
jorge.saludar()
jorge.soyAlto()
//new es reservada para crear obejtos ejecutando contructores
//new hace un return inplicito de (this)
//es decir return this dentro de la funcion
//tarea pasara altura y agregar una funcion donde la persona diga si es alto
