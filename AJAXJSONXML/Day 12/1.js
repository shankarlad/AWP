
window.addEventListener("load", () => {

    let xhr = new XMLHttpRequest();

    let url = "https://reqres.in/api/users?page=2";

    xhr.open("GET", url);

    xhr.onload = () => {

        let jsonData = JSON.parse(xhr.responseText);

        domLogicHere(jsonData);
    }

    xhr.send();
});


let domLogicHere = (jsonData) => {

    let data = jsonData.data;

    let parent = document.getElementById("parentBlock");

    for (let i = 0; i < data.length; i++) {

        let item = data[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].children[0].children[0].src = item.avatar;
        newElement.children[0].children[1].children[0].innerHTML = "ID : " + item.id;
        newElement.children[0].children[1].children[1].innerHTML = "Email : " + item.email;
        newElement.children[0].children[1].children[2].innerHTML = "Name : " + item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);
    }



};