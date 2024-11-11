//ELEMENTOS DEL DOM
let cajaDeIntentos = document.getElementById('caja__de--intentos');
let formulario = document.querySelector(".entrada__palabra");

//Variables declaradas
const listaDePalabras = ['zapato', 'perro', 'mañana','cocodrilo','por'];
let numeroDeIntentos = 5;

//EVENTOSLISTENER
document.getElementById("probarLetra").addEventListener('click', probarLetra);




//Ejecucion del programa

mostrarNumeroIntentos();
mostrarEspaciosParaLetra();


//Funciones
function palabraAleatoria() {
    const numeroAleatorio = Math.floor(Math.random() * listaDePalabras.length);
    return listaDePalabras[numeroAleatorio];
}
function mostrarNumeroIntentos() {
    cajaDeIntentos.innerText = ' ' + numeroDeIntentos;
}
function probarLetra() {
    if (numeroDeIntentos > 0) {
        numeroDeIntentos--;
        mostrarNumeroIntentos();
    } else {
        alert('perdiste das lastima mi amor!');
        location.reload();
    }
}
function mostrarEspaciosParaLetra() {
    formulario.innerHTML="";
    palabraAleatoria().split('').forEach((element,index) => {
        formulario.innerHTML += `<input type="text" name="" id="letraPalabra${index}">`;
    });
}