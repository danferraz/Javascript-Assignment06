//create a list of play options
var gameOptions = ["Rock", "Paper", "Scissors"];

function run() {
    //set player to false
    var player = false;
    var result = "";

    //assign a random play to the computer
    var computerInput = gameOptions[Math.floor(Math.random() * Math.floor(3))];
    document.getElementById('computerResult').innerHTML = "COMPUTER: " + computerInput;
    while (player === false) {
        var playerInput = document.getElementById('playerMove').value;

        if (playerInput === computerInput) {
            result = "Tie!";
        } else if (playerInput === "Rock") {
            if (computerInput === "Paper")
                result = "You lose!", computerInput, "covers", playerInput;
            else
                result = "You win!", playerInput, "smashes", computerInput;
        } else if (playerInput === "Paper") {
            if (computerInput === "Scissors")
                result = "You lose!", computerInput, "cut", playerInput;
            else
                result = "You win!", playerInput, "covers", computerInput;
        } else if (playerInput === "Scissors") {
            if (computerInput === "Rock")
                result = "You lose!", computerInput, "smashes", playerInput;
            else
                result = "You win!", playerInput, "cut", computerInput;
        } else {
            result = "That's not a valid play. Check your spelling!";
        }

        //player was set to True to end the game
        player = true;
        //computerInput = gameOptions[Math.random(0,2)];
    }

    document.querySelector("h2").innerHTML = "Game result: " + result;
  
}
