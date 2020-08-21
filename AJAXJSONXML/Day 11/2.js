
let bookList = [
    { id: 1, title: "Five Point Someone" },
    { id: 2, title: "Three Mistake Of My Life" },
    { id: 3, title: "One Night at The Call Center" },
    { id: 4, title: "Two States" },
    { id: 5, title: "One Indian Girl" },
    { id: 6, title: "Revolution 2020" },
    { id: 7, title: "The Girl in Room 105" },
    { id: 8, title: "Half Girlfriend" },
    { id: 9, title: "India Positive" },
    { id: 10, title: "Making India Awsome" }
];

window.addEventListener("load", () => {

    let parent = document.querySelector("#parentBlock");

    for (let i = 0; i < bookList.length; i++) {

        let item = bookList[i];

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex"

        newElement.children[0].innerHTML = item.title;

        parent.insertBefore(newElement, parent.firstChild);
    }

});