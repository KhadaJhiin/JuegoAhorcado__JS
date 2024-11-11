//ELEMENTOS DEL DOM
let cajaDeIntentos = document.getElementById('caja__de--intentos');
let formulario = document.querySelector(".entrada__palabra");
let inputDeEntrada = document.getElementById("unicoEntradaUsuario");

//Variables declaradas
const listaDePalabras = ['zapato', 'perro', 'mañana', 'cocodrilo', 'aguardiente','vinito','cocina','libros','cientifico','automovil','tridente','espabilado','ipsofacto','infraganti','somnoliento'];
let numeroDeIntentos = 5;
const palabraSecreta = palabraAleatoria();
const arrayPalabra = palabraSecreta.split('');

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
function mostrarEspaciosParaLetra() {
    formulario.innerHTML = "";
    arrayPalabra.forEach((element, index) => {
        formulario.innerHTML += `<input disabled = false class="inputName" type="text" name="" id="letraPalabra${index}" value="">`;
    });
}
function buscarIndiceLetras(letra, palabra) {
    let listaIndices = [];
    palabra.forEach((element, index) => {
        if (letra == element) {
            listaIndices.push(index);
        }
    })
    return listaIndices;
}
function tranformadorInputString() {
    let palabra = '';
    for (let i = 0; i < arrayPalabra.length; i++) {
        let letraEncontrada = document.getElementById(`letraPalabra${i}`);
        palabra += letraEncontrada.value;
    }
    return palabra;
}
function probarLetra() {
    let letra = inputDeEntrada.value;
    if (numeroDeIntentos > 0) {
        if (arrayPalabra.includes(letra)) {
            let listaIndices = buscarIndiceLetras(letra, arrayPalabra);
            listaIndices.forEach(element => {
                let letraEncontrada = document.getElementById(`letraPalabra${element}`);
                letraEncontrada.value = letra;
            })
        } else {
            numeroDeIntentos--;
            mostrarNumeroIntentos()
        }
    } else {
        alert('perdiste das lastima mi amor!');
        location.reload();
    }
    inputDeEntrada.value = "";
    
    let palabraUsuario = tranformadorInputString();
    if (palabraUsuario == palabraSecreta) {
        alert('GANASTE MI PERRO LO SALVASTE AL ASESINO')
        location.reload();
    }
}

