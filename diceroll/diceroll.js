

let diceRoll = function () {

    // here we get the random value inbetween 1 to 6
    var dicecount = Math.floor(Math.random() * 6) + 1;

    // accesing the img tag
    var dice = document.querySelector("#img");

    // accessing the src attribute of img and passing dicecount
    dice.src = "dice-" + dicecount + ".png";
    dice.style.visibility = "visible";

};