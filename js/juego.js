// obtenemos las casillas

let tablero = document.querySelector(".tablero");
let casillas = tablero.querySelectorAll(".tablero--casilla");
console.log(casillas);

// hacemos los turnos, inicializando siempre en el jugador 1

let jugador1 = true;
let jugador2 = false;
let turno = document.querySelector(".turno");

// controlar las victorias de cada uno
let comparativaj1 = document.querySelector('.comparativa--j1');
let comparativaj2 = document.querySelector('.comparativa--j2');

let contJ1 = 0;
let contJ2 = 0;

// controlamos que no se pueda jugar mas de una vez en la misma casilla
let casillasJugadas = [];

// controlamos que no haya ganado ningun jugador
let finDePartida = false;



    // recorremos todas las casillas para ver donde hemos hecho click
    for (let i = 0; i < casillas.length; i++) {
      casillas[i].addEventListener("click", () => {

        // comprobamos que las casillas no esten todas ocupadas o que la partida haya finalizado

        if (casillasJugadas.length != 9 && !finDePartida) {
          if (jugador1 == true) {
            if (casillasJugadas.includes(i)) {
              
            } else {
              turno.innerHTML = "Turno: Jugador 2";

              // ponemos una X si pincha el jugador1
              casillas[i].innerHTML = "X";
              casillas[i].style.backgroundColor = 'red';

              jugador1 = false;
              jugador2 = true;

              casillasJugadas.push(i);
              console.table(casillasJugadas);
            }
            if (
              (casillas[0].innerHTML == "X" && casillas[1].innerHTML == "X" && casillas[2].innerHTML == "X") || // línea horizontal superior
              (casillas[3].innerHTML == "X" && casillas[4].innerHTML == "X" && casillas[5].innerHTML == "X") || // línea horizontal media
              (casillas[6].innerHTML == "X" && casillas[7].innerHTML == "X" && casillas[8].innerHTML == "X") || // línea horizontal inferior
              (casillas[0].innerHTML == "X" && casillas[3].innerHTML == "X" && casillas[6].innerHTML == "X") || // columna izquierda
              (casillas[1].innerHTML == "X" && casillas[4].innerHTML == "X" && casillas[7].innerHTML == "X") || // columna media
              (casillas[2].innerHTML == "X" && casillas[5].innerHTML == "X" && casillas[8].innerHTML == "X") || // columna derecha
              (casillas[0].innerHTML == "X" && casillas[4].innerHTML == "X" && casillas[8].innerHTML == "X") || // diagonal principal
              (casillas[2].innerHTML == "X" && casillas[4].innerHTML == "X" && casillas[6].innerHTML == "X")    // diagonal secundaria
            )  {
              
              finDePartida = true;
              contJ1++;
              comparativaj1.innerHTML = `JUGADOR 1 : ${contJ1} - ${contJ2}`;
              comparativaj2.innerHTML = `JUGADOR 2 : ${contJ2} - ${contJ1}`;

            }
          } else {
            if (casillasJugadas.includes(i)) {
              
            } else {
              turno.innerHTML = "Turno: Jugador 1";

              // ponemos una O si pincha el jugador2
              casillas[i].innerHTML = "O";
              casillas[i].style.backgroundColor = 'blue';

              jugador1 = true;
              jugador2 = false;

              // console.log(jugador1);
              // console.log(jugador2);

              casillasJugadas.push(i);
              console.table(casillasJugadas);

              // comprobar si ha ganado

              if (
                (casillas[0].innerHTML == "O" && casillas[1].innerHTML == "O" && casillas[2].innerHTML == "O") || // línea horizontal superior
                (casillas[3].innerHTML == "O" && casillas[4].innerHTML == "O" && casillas[5].innerHTML == "O") || // línea horizontal media
                (casillas[6].innerHTML == "O" && casillas[7].innerHTML == "O" && casillas[8].innerHTML == "O") || // línea horizontal inferior
                (casillas[0].innerHTML == "O" && casillas[3].innerHTML == "O" && casillas[6].innerHTML == "O") || // columna izquierda
                (casillas[1].innerHTML == "O" && casillas[4].innerHTML == "O" && casillas[7].innerHTML == "O") || // columna media
                (casillas[2].innerHTML == "O" && casillas[5].innerHTML == "O" && casillas[8].innerHTML == "O") || // columna derecha
                (casillas[0].innerHTML == "O" && casillas[4].innerHTML == "O" && casillas[8].innerHTML == "O") || // diagonal principal
                (casillas[2].innerHTML == "O" && casillas[4].innerHTML == "O" && casillas[6].innerHTML == "O")    // diagonal secundaria
              ) {
                finDePartida = true;
                contJ2++;
                comparativaj1.innerHTML = `JUGADOR 1 : ${contJ1} - ${contJ2}`;
                comparativaj2.innerHTML = `JUGADOR 2 : ${contJ2} - ${contJ1}`;
              }
            }
          }
        }
        });
    }

function comenzar(){
  casillasJugadas.length = 0;

  for (let i = 0; i < casillas.length; i++) {
    casillas[i].innerHTML = '';
    casillas[i].style.backgroundColor = '#8372fd';
    
  }

  finDePartida = false;
}