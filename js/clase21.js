function Persona(nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}//esta funcion es el contructor de la clase?
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var jorge = new Persona('jorge', 'vivas')
jorge.saludar()
//new es reservada para crear obejtos ejecutando contructores
//new hace un return inplicito de (this)
//es decir return this dentro de la funcion
//tarea pasara altura y agregar una funcion donde la persona diga si es alto
const ALTURA_DEFAULT = 1.8

functionPersona(nombre, altura){
	this.nombre = nombre
	this.altura = altura
}

Persona.prototype.saludar = function(){

	if (this.altura > ALTURA_DEFAULT)
		console.log(`Hola me llamo ${this.nombre} y soy una persona Alta, mi altura es ${this.altura}`)
	else
		console.log(`Hola me llamo ${this.nombre} y soy una persona Baja, mi altura es ${this.altura}`)
}


var rabi = new Persona('RABI', 2.0)

var leonel = new Persona('LEONEL',1.5)
