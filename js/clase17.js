var jorge ={
  nombre:'Jorge',
  apellido:'Vivas',
  altura:1.72
}
var anyela ={
  nombre:'Anyela',
  apellido:' de Vivas',
  altura:1.60
}

var luis ={
  nombre:'Luis',
  apellido:' Vivas',
  altura:1.90
}


var personas = [jorge,anyela, luis]


for(i=0;i<personas.length;i++){
  console.log(`la altura de ${personas[i].nombre} ${personas[i].apellido} es ${personas[i].altura} mts`)
}
