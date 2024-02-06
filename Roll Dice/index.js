
let p1Name = prompt("Player 1, what is your name?")
let p2Name = prompt("Player 2, what is your name?")
document.getElementById("p1Name").innerHTML = p1Name
document.getElementById("p2Name").innerHTML = p2Name
console.log(p1Name)
    

function rollDice(p1Name, p2Name){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var player1Src=("images/dice"+randomNumber1+".png");
    document.querySelector(".img1").setAttribute('src', player1Src);
    var player2Src=("images/dice"+randomNumber2+".png");
    document.querySelector(".img2").setAttribute('src', player2Src);
    document.querySelector("h1").innerHTML = checkWinner(randomNumber1, randomNumber2);
}

function checkWinner(num1, num2){
    if (num1 > num2){
        var winner = p1Name + " wins!";
    } else if(num1 < num2){
        var winner = p2Name + " wins!";
    } else {
        var winner = "It's a draw!";
    }
    return winner;
}

