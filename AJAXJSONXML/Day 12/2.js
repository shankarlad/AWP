
// Using JSON
let callAjaxJson = () => {

    let xhr = new XMLHttpRequest();
    let url = "https://fakerestapi.azurewebsites.net/api/Authors";
    xhr.open("GET", url);
    xhr.onload = () => {
        let jsonData = JSON.parse(xhr.responseText);
        jsonDomOperation(jsonData);
    };
    xhr.send();
};

let jsonDomOperation = (data) => {

    let parent = document.querySelector("#parentBlock");

    for (let i = 0; i < 20; i++) {
        let item = data[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[0].innerHTML = item.FirstName + " " + item.LastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};


// Using XML

let callAjaXML = () => {

    let xhr = new XMLHttpRequest();

    let url = "https://fakerestapi.azurewebsites.net/api/Authors";
    xhr.open("GET", url);

    xhr.setRequestHeader("accept", "application/xml");

    xhr.onload = () => {
        let XMLData = xhr.responseXML;

        xmlDomOperation(XMLData);
    };

    xhr.send();
};

let xmlDomOperation = (data) => {

    const parentElement = data.querySelector("ArrayOfAuthor");

    for (let i = 0; i < 20; i++) {

        let authorItem = parentElement.children[i];

        // let firstName = authorItem.querySelector("FirstName").innerHTML;
        // let lastName = authorItem.querySelector("LastName").innerHTML;

        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;

        // HTML DOM
        let parent = document.querySelector("#parentBlock");
        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";

        newElement.children[0].innerHTML = firstName + " " + lastName;

        parent.insertBefore(newElement, parent.firstChild);
    }
};