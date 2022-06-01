// ARRAY

const arrayNombres = [];
arrayNombres.push("Gaia");
arrayNombres.push("Fede","Greta","Gina");


// RECORRER ARRAY

//FOR
console.log("_____FOR_____");

for (let i = 0; i < arrayNombres.length; i++) {
    const nombre = arrayNombres[i];
    console.log(`nombre: ${nombre}`);   //  <-- TEMPLATE LITERAL `${}`
}

//FOR OF
console.log("_____FOR OF_____");
for (const nomb of arrayNombres) {
    console.log(nomb);
}

//FOR EACH
console.log("_____FOR EACH_____");
// por cada elemento del array aplica un callback

arrayNombres.forEach(nom => {
    console.log(nom);
});


// mostrar solo los que empiezan con G
console.log("_____NOMBRES solo G_____");
arrayNombres.filter(n => n.startsWith("G")).forEach(n => console.log(n));


console.log("_____NOMBRES solo g_____");
arrayNombres.filter(n => n.toLowerCase().startsWith("g")).forEach(n => console.log(n));
    

// to LOWER
//.map(n=>n.toLowerCase)


///////////////// OBJETOS ///////////////////////////

//LITERAL 
console.log("---------- LITERAL -----------")
// no es un prototype (Clase) es directamente un obj

const persona = {
    nombre: "Gaia",
    primerApellido: "Rainis",
    segundoApellido: "Acosta",
    edad: "3",
    nombreCompleto: function(){return `${this.nombre} ${this.primerApellido} ${this.segundoApellido}`}
    // sin THIS busca la propiedad en el ambito global
    // arrow function no funciona con THIS
};

console.log(persona.nombreCompleto());

///////////////
// con OBJECT()
console.log("---------- OBJECT -----------")

const empleado = new Object();
// es mas modificable, se le pueden agregar mas propiedades:
// REFLEXION ---> prop que permite acceder y modificar obj en tiempo de ejecucion
empleado.nombre = "Greta";
empleado.apellidos = "Ginapoulus";
empleado.fullName = () => `${empleado.nombre} ${empleado.apellidos}`; /// ARROW sin return sin THIS sin {}

console.log(empleado.fullName());


console.log("----------  ARRAY  OBJECT -----------")

const arrTrabajadores = [];

const trabajador1 = new Object();
trabajador1.nombre = "Andy";
trabajador1.correo = "andy@andy.com";

const trabajador2 = new Object();
trabajador2.nombre = "Fede";
trabajador2.correo = "fede@fede.com";

const trabajador3 = new Object();
trabajador3.nombre = "Greta";
trabajador3.correo = "greta@gmail.com";

const trabajador4 = new Object();
trabajador4.nombre = "Gina";
trabajador4.correo = "Gina@gmail.com";


arrTrabajadores.push(trabajador1,trabajador2,trabajador3,trabajador4);


arrTrabajadores.forEach(tr => {
    console.log(tr)
});

console.log("----------  ARRAY  OBJECT FILTRADO -----------")
// tomo solo el correo con MAP, y FILTRO por correo
arrTrabajadores.map(t => t.correo).filter(c => c.includes("gmail.com")).forEach(c => console.log(c));

console.log("----------  ARRAY  OBJECT FILTRADO COMPLETO -----------")
// FILTRO por correo pero devuelvo objeto COMPLETO
arrTrabajadores.filter(c => c.correo.includes("gmail.com")).forEach(c => console.log(c));

// console.log("----------  SORT -----------")
// SORT
// arrTrabajadores.sort(t => t.nombre).forEach(c => console.log(c));



// RUN con Node
// cd JS
// node nombrearchivo.js
