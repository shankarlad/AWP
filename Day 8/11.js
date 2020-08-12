
var lCounter = 1;



function likeHere() {

    document.querySelector("#likeb").innerHTML = "Like_" + lCounter;
    lCounter++;
};



// using child element


function commentHere() {

    let comment = document.querySelector("#inputid").value;

    // using cloneNode create element
    const newEle = document.querySelector("#commentid").cloneNode(true);

    newEle.removeAttribute("id");

    newEle.style.display = "flex";
    newEle.style.justifyContent = "space-between";
    newEle.style.border = "1px solid black";
    newEle.style.fontFamily = "cursive";
    newEle.style.visibility = "visible";

    newEle.children[0].innerHTML = comment;


    const commentBox = document.querySelector("#commentbox");

    commentBox.insertBefore(newEle, commentBox.firstChild);

    document.querySelector("#inputid").value = "";
};

// delete comment function

function deletecomment(btnclick) {

    btnclick.parentElement.remove();
}