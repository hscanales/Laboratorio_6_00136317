class Persona{
    constructor(nombre,apellido,fecha,telefono,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha=fecha;
        this.telefono = telefono;
        this.email = email;
    }
}


function crearPersona(){
    var nombre = prompt("Ingrese nombre: ");
    var apellido = prompt("Ingrese apellido");
    var fecha = prompt("Ingrese su fecha de nacimiento");
    var telefono = prompt("Ingrese su numero de telefono");
    var email = prompt("Ingrese su email: ");
    var persona= new Persona(nombre,apellido,fecha,telefono,email);
    return persona;
}


function ejercicio10(){
    console.log(crearPersona());
}

var usuarios = [];


function ejercicio11(){
    var n = prompt("Ingrese cantidad de personas que quiera ingresar: ");
    for (let index = 0; index < parseInt(n); index++) {
        usuarios.push(crearPersona());
        
    }
}
console.log("Hola amiguitos! El ejercicio 11 esta incluido en el codigo del ejercicio 10 ");