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

// to LOWER
//.map(n=>n.toLowerCase)


// OBJETO

//LITERAL 
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

console.log("---------- Nombre Completo -----------")
console.log(persona.nombreCompleto());


// Creacion de obj con OBJECT()
console.log("---------- OBJECT -----------")

const empleado = new Object();
// es mas modificable, se le pueden agregar mas propiedades:
// REFLEXION ---> prop que permite acceder y modificar obj en tiempo de ejecucion
empleado.nombre = "Greta";
empleado.apellidos = "Ginapoulus";
empleado.fullName = () => `${empleado.nombre} ${empleado.apellidos}`; /// ARROW sin return sin THIS sin {}


console.log("---------- Nombre Completo -----------")
console.log(empleado.fullName());




// RUN con Node
// cd JS
// node nombrearchivo.js
