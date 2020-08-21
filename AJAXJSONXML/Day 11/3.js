
// Using AJAX and JSON ==> Taking the objects/XML from server

window.addEventListener("load", () => {

    // Step-1
    // lets make ajax request here
    let xhr = new XMLHttpRequest();

    //Step-2
    // makding GET request. :: demo URL :: https://reqres.in/api/users?page=2
    xhr.open("GET", "https://reqres.in/api/users?page=2");


    //Step-4
    // handshake and lisner of response
    xhr.onreadystatechange = () => {
        // on ready state 4 :: when operation comples with server
        if (xhr.readyState === 4) {

            //response server is in string so need to JSON.parse    
            let sjson = JSON.parse(xhr.responseText);

            // lets use this list and plot our dom by calling dom logic here
            let data = sjson.data;

            domlogicHere(data);
        }
    };

    //Step-3
    //Ajax call goes here
    xhr.send();
});

let domlogicHere = (data) => {

    let parent = document.querySelector("#parentBlock");

    for (let i = 0; i < data.length; i++) {

        let item = data[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex"

        newElement.children[0].children[0].innerHTML = "ID : " + item.id;
        newElement.children[0].children[1].innerHTML = "Name : " + item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);
    }
};