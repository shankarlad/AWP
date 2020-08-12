
var lCounter = 1;

function likeHere() {

    document.querySelector("#likeb").innerHTML = "Like_" + lCounter;
    lCounter++;
};

function commentHere() {

    let comment = document.querySelector("#inputid").value;

    const newEle = document.createElement("div");

    newEle.textContent = comment;

    newEle.style.border = "1px solid black";
    newEle.style.fontFamily = "cursive";

    const commentBox = document.querySelector("#commentbox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputid").value = "";
};