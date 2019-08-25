

//for image1

  var randomNumber1 =Math.floor(Math.random() * 6) + 1;  //random nos from 1-6


var randomDiceImage = "dice" + randomNumber1 + ".png" ; //dice1 to dice6


var randomImageSource = "images/" + randomDiceImage; //images/dice1-images/dice6

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src" , randomImageSource);

//for image2

var randomNumber2 =Math.floor(Math.random() * 6) + 1;  //random nos from 1-6


var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1-images/dice6

var image2 = document.querySelectorAll("img") [1].setAttribute("src" , randomImageSource2);


//winner of the game
if(randomNumber1 > randomNumber2) {

document.querySelector("h1").innerHTML = "⛳player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "player 2 wins!⛳";
}

else {
    document.querySelector("h1").innerHTML = "draw!!";
}
