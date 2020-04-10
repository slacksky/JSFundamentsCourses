class Persona {
  constructor(nombre,apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }//creado apartir de la antigua funcion Persona
  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
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








//var jorge = new Persona('jorge', 'vivas', 1.92)
//jorge.saludar()
//jorge.soyAlto()
//var anyela = new Desarrollador('anyela', 'de vivas', 1.65)
//new es reservada para crear obejtos ejecutando contructores
//new hace un return inplicito de (this)
//es decir return this dentro de la funcion
//tarea pasara altura y agregar una funcion donde la persona diga si es alto
