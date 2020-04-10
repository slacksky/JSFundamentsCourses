//callstack order de ejecuacion de stack
//colas de tareas es lo
//pasar funciones como parametros y asincrinismo


class Persona {
  constructor(nombre,apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }//creado apartir de la antigua funcion Persona
  saludar(fn){//recepcion de funcion
    var {nombre, apellido}=this //desgrloce de variables
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }//funcion interna no necesita cololca function
  soyAlto(){
    return this.altura >1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)//llama al contructor de la clase padre sino no funciona this

  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y desarrollo java script`)
  }
}//extends es igual que decir hereda

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Que molleja, no sabia que eras desarrollador/a!!`)
  }
}






var jorge = new Persona('jorge', 'vivas', 1.92)
//jorge.saludar()
//jorge.soyAlto()
var anyela = new Desarrollador('anyela', 'de vivas', 1.65)

jorge.saludar(responderSaludo)
anyela.saludar(responderSaludo)

//new es reservada para crear obejtos ejecutando contructores
//new hace un return inplicito de (this)
//es decir return this dentro de la funcion
//tarea pasara altura y agregar una funcion donde la persona diga si es alto
