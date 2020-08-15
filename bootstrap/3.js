let likeMe = (likeEle) => {

    // Innerhtml returs STRING.
    let likeCountString = likeEle.children[0].innerHTML;

    // string to number
    let likeCount = parseInt(likeCountString);

    // lets increase the like count
    likeCount++;

    likeEle.children[0].innerHTML = likeCount;
};

let commentMe = (commentEle) => {

    // Cloning of comment box
    let newCmtBox = commentEle.parentElement.parentElement.parentElement.children[2];

    let newCmtDiv = newCmtBox.children[0].cloneNode(true);
    newCmtDiv.style.border = "1px solid black"
    newCmtDiv.style.visibility = "visible";

    // Reading the value in input box
    let commentText = commentEle.parentElement.parentElement.children[1].children[0];
    let commenTextvalue = commentText.value;

    // giving value to the new comment 
    newCmtDiv.children[0].innerHTML = commenTextvalue;

    // printing in new commnet box
    newCmtBox.insertBefore(newCmtDiv, newCmtBox.firstChild);

    // clearing the input box
    commentText.value = "";
};

let deleteMe = (deleteEle) => {

    //Deleting the perticuler comment
    deleteEle.parentElement.parentElement.remove();
};