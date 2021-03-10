
//Úkol 1: Barva tlačítka 

let tlacitkoBarva = document.querySelector('.tlacitkoBarva');
let ctverecek = document.querySelector('.ctverecek');

tlacitkoBarva.addEventListener('click',zmenitBarvu);

function zmenitBarvu () {
  ctverecek.style.backgroundColor = '#98FB98';
}

//Úkol 2: Ukaž výsledek

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

 let tlacitkoVysledek = document.querySelector('.tlacitkoVysledek');

 tlacitkoVysledek.addEventListener('click',zobraz);


function secti(a, b) {
  let c = a + b;
  return c;
}

function zobraz() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

//Úkol 3: Zobraz text

/**
 * Upozorní uživatele při spuštění.
 */
 function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverecek.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
}