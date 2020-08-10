var cCounter = 1;
var lCounter = 1;

function likeHere() {

    document.querySelector("#likeb").innerHTML = "Like_" + lCounter;
    lCounter++;
};

function commentHere() {
    let newEle = document.createElement("div");

    newEle.textContent = "User Comment___" + cCounter;

    newEle.style.border = "1px solid black";
    newEle.style.fontFamily = "cursive";

    let commentBox = document.querySelector("#commentbox");

    commentBox.appendChild(newEle);



    cCounter++;
};