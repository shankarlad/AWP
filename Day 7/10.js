
var lCounter = 1;

function likeHere() {

    document.querySelector("#likeb").innerHTML = "Like_" + lCounter;
    lCounter++;
};
// using child element
function commentHere() {

    let comment = document.querySelector("#inputid").value;

    const newEle = document.createElement("div");

    newEle.style.display = "flex";
    newEle.style.justifyContent = "space-between";
    newEle.style.border = "1px solid black";
    newEle.style.fontFamily = "cursive";

    const child1 = document.createElement("div");
    child1.textContent = comment;

    const child2 = document.createElement("button");
    child2.textContent = "Delete";

    newEle.appendChild(child1);
    newEle.appendChild(child2);


    const commentBox = document.querySelector("#commentbox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputid").value = "";
};