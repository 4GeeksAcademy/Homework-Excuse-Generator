//ENGLISH VERSION//

let who = ["A kid", "A dog", "A turtle", "A thieve"];
let action = ["stole", "peed", "destroyed", "broke"];
let what = ["my laptop", "my heart", "the car", "my keys"];
let when = [
  "just a minute ago",
  "yesterday",
  "during my lunch",
  "while I was praying",
];

let betterWho = [
  "A kid flew right over me and blasted a car with his laser beam,",
  "Shrek visited me yesterday,",
  "Simon Bolivar revived and told me not to go out of my house,",
  "Honestly, i didn`t wanted to go,",
];
let betterEnd = [
  "that's why I stayed on bed.",
  "That's why I didnt went to the reunion.",
  "It is What it is.",
];

document
  .getElementById("excusesBtnENG")
  .addEventListener("click", function generateExcuse() {
    let excuse = `${who[Math.floor(Math.random() * who.length)]} ${
      action[Math.floor(Math.random() * action.length)]
    } ${what[Math.floor(Math.random() * what.length)]} ${
      when[Math.floor(Math.random() * when.length)]
    }`;

    document.getElementById("excuses").innerHTML = excuse;
  });

document
  .getElementById("betterExcusesBtnENG")
  .addEventListener("click", function generateBetterExcuse() {
    let betterExcuse = `${
      betterWho[Math.floor(Math.random() * betterWho.length)]
    } ${betterEnd[Math.floor(Math.random() * betterEnd.length)]}`;

    document.getElementById("betterExcuses").innerHTML = betterExcuse;
  });

//SPANISH VERSION//

let quien = ["Un niño", "Un perro", "Una tortuga", "Un ladrón"];
let accion = ["robó", "meó", "destruyó", "rompió"];
let elQue = ["mi laptop", "mi corazón", "el auto", "mis llaves"];
let cuando = [
  "hace apenas un minuto",
  "ayer",
  "durante mi almuerzo",
  "mientras estaba orando",
];

let mejorQuien = [
  "Un chico flotó sobre mí y destruyó un auto con su rasho láser",
  "Shrek me visitó ayer",
  "Simón Bolívar vino a visitarme y me dijo que no saliera de mi casa",
  "Sinceramente, no quería ir",
];
let mejorFinal = [
  "por eso me quedé en la cama.",
  "Por eso no fui a la reunión.",
  "Es lo que es.",
];

document
  .getElementById("excusesBtnESP")
  .addEventListener("click", function generarExcusa() {
    let excusa = `${quien[Math.floor(Math.random() * quien.length)]} ${
      accion[Math.floor(Math.random() * accion.length)]
    } ${elQue[Math.floor(Math.random() * elQue.length)]} ${
      cuando[Math.floor(Math.random() * cuando.length)]
    }`;

    document.getElementById("excusa").innerHTML = excusa;
  });

document
  .getElementById("betterExcusesBtnESP")
  .addEventListener("click", function generarMejorExcusa() {
    let mejorExcusa = `${
      mejorQuien[Math.floor(Math.random() * mejorQuien.length)]
    } ${mejorFinal[Math.floor(Math.random() * mejorFinal.length)]}`;

    document.getElementById("mejorExcusa").innerHTML = mejorExcusa;
  });
