class Persona {

    // propiedades

    // nombre;
    // apellidos;

    // propiedades privadas si hay que declararlas
    #edad;

    // constructor
    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this.#edad = edad;
    }

    // metodos
    fullName() {
        return `${this._nombre} ${this._apellidos}`;
    }

    // getters and setters
    get nombre() {
        return `${this._nombre}`;
    }

    get apellidos() {
        return `${this._apellidos}`;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get edad() {
        return `${this.#edad}`;
    }
}


let persona = new Persona("Victor", "Machado", 59);

console.log(persona);

console.log(persona.nombre);

console.log(persona.edad);