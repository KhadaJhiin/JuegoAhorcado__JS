//Logic in JS for the game

//We create the list with the words to guess

const wordList = ['pencil', 'cellphone', 'laptop', 'notebook', 'dog', 'shoes', 'frigde', 'desk', 'aligator', 'elephant', 'ancient', 'grandmother', 'brother', 'sister', 'stepfather', 'stepmother'];

//We create the function to choose the word to guess

const randomNumber = Math.floor(Math.random() * wordList.length);
const worChoose = wordList[randomNumber];

//We create the variable for the number of attempts

const numberOfAttempts = worChoose.length * 2;

//We select our web elment to display this number of attempts

let palabraescogida = document.getElementById("palabraescogida");

let attepmtsBox = document.getElementById("caja__de--intentos");
attepmtsBox.innerText += " " + numberOfAttempts;

//Function to create the spaces where the letters will be

function createSpace() {
    let spacesForm = document.querySelector(".entrada__palabra");
    spacesForm.innerHTML = "";
    const arrayWord = worChoose.split('');
    let counter = 0;
    arrayWord.forEach(space => {
        spacesForm.innerHTML += `<input class="inputName inputName--mod${counter}" type="text" value="${space}">`;
        counter++;
    });
    spacesForm.innerHTML += '<button type="submit">Intento</button>';
}

//Function to find the index of the letters of the word

function indexDetect(letter, list) {
    let arrayIndext = [];

    list.forEach((letter2, index) => {
        if (letter2 == letter) {
            arrayIndext.push(index);
        }
    });

    return arrayIndext > 0 ? arrayIndext : null;
}

//Function so that the words hide appear when the match exists

function wordMatch() {
    const userInput = document.querySelector();
}

createSpace();

while (numberOfAttempts > 0) {

    numberOfAttempts--;

    if(numberOfAttempts==0){
        break
    }
}