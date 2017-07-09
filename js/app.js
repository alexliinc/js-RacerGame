var playerOne = document.getElementById("player1");

var playerTwo = document.getElementById("player2");

var finish = document.getElementById("finishLine");

var imageOffset = 0

function movePlayer(player) {
  imageOffset += 25
  player.style.left = imageOffset + "px";
}



document.onkeydown = checkKey;

function checkKey(e) {
    var playerOnePosition = playerOne.getBoundingClientRect();
    var finshPosition = finish.getBoundingClientRect();
    e = e || window.event;

    if (e.keyCode == '81') {
        console.log("q");
        movePlayer(playerOne);
        //console.log(playerOnePosition);
        //console.log(finshPosition.left);
        if (playerOnePosition.right>finshPosition.left){
          alert("winner");
        }
    }
    else if (e.keyCode == '80') {
        console.log("p");
        movePlayer(playerTwo);
    }

}

function winner(){

}
