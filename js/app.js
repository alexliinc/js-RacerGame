/*Project Name: Racer Game
Author: Alex Li
Developer @GA in DENVER */

// PLAYERS AND FINISH LINE
var playerOne = document.getElementById("player1");
var playerTwo = document.getElementById("player2");
var finish = document.getElementById("finishLine");

var finishPosition = finish.getBoundingClientRect();

// MOVING PLAYERS
var playerOneOffset = 0;
var playerTwoOffset = 0;

function movePlayer1(player) {
  playerOneOffset += 50
  player.style.left = playerOneOffset + "px";
}

function movePlayer2(player) {
  playerTwoOffset += 50
  player.style.left = playerTwoOffset + "px";
}
// MOVING PLAYERS


// HAVING A WIN CONDITION
document.onkeydown = checkKey;

function checkKey(e) {
    var playerOnePosition = playerOne.getBoundingClientRect();
    var playerTwoPosition = playerTwo.getBoundingClientRect();

    e = e || window.event;

    if (e.keyCode == '81') {
        console.log("q");
        movePlayer1(playerOne);
        console.log(playerOnePosition.right);
        //console.log(finishPosition.left);
        if (playerOnePosition.right>finishPosition.left){
          alert("DareDevil is the winner");
        }
    }
    else if (e.keyCode == '80') {
        console.log("p");
        movePlayer2(playerTwo);
        if (playerTwoPosition.right>finishPosition.left){
          alert("MegaMan that looks like DareDevil is the winner");
        }
    }
}
