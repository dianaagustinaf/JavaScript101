// Suponemos que la siguiente informacion, es decir, los recursos, estan ubicados en servidor
// y no te van a llegar de inmediato cuando tu los solicites

const usersList = [
    { id: 1, name: 'user1', city: 1 },
    { id: 2, name: 'user2', city: 2 },
    { id: 3, name: 'user3', city: 3 },
    { id: 4, name: 'user4', city: 4 }
];

const citiesList = {
    1: "Murcia",
    2: "Cartagena",
    3: "Alicante",
    4: "Ciudad Real"
};

function getUsers(dato, intervalo) {
    return new Promise((resolve, reject) => {
        if (dato == '' || typeof dato !== 'object') {
            reject("El dato esta vacio o no es el objeto esperado");
        } else if (intervalo < 0 || typeof intervalo !== 'number') {
            reject("El intervalo no puede ser negativo y tiene que ser numerico")
        } else {
            setTimeout(() => {
                resolve(dato);
            }, intervalo);
        }

    });
}

function getCities() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(citiesList);
        }, 1000);
    });
}
/*

// Para consumir las promesas
console.clear();

const usersPromise = getUsers(usersList, 3000);
console.log(usersPromise);

const citiesPromise = getCities();    // ya tengo las ciudades pero aun no los users
console.log(citiesPromise);             // por eso hay que encadenar

usersPromise.then(users => console.log(users)); //THEN 
citiesPromise.then(console.log);                // = a recibir readyState 4 y status 200
                                                // y devuelve otra promesa

*/

// Las promesas se pueden encadenar, para garantizar que su procesamiento sea en un orden concreto

/*
usersPromise
    .then(users => {
        console.log("Users -> ", users);
        return getCities();
    })
    .then(cities => {
        console.log("Cities -> ", cities);

    })
    .catch(e => {
        console.log("Se ha producido un error");
    })
*/


/** ASYNC AWAIT
 * implica "No more then". Permite tratar el codigo asincrono, con una apariencia sincrónica, 
 * porque internamente se continua con las promesas (sugar sintax)
 */



const getInfo = async () => {
    let users = await getUsers(usersList, 3000); // espera a nivel de este bloque
    let cities = await getCities();               // LOCAL
    console.log("Users -> ", users);
    console.log("Cities -> ", cities);
}

getInfo();

