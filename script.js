// Logica para juego del ahorcado

/*
Instalamos la libreria de pruebas faker para obtener datos de nombre al azar
*/

const { faker } = require('@faker-js/faker');

const palabraAleatoria = faker.person.firstName();
