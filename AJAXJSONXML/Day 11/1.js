
window.addEventListener("load", () => {

    let parent = document.querySelector("#parentBlock");

    for (let i = 0; i < 10; i++) {

        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex"

        newElement.children[0].innerHTML = "CDAC " + i;

        parent.insertBefore(newElement, parent.firstChild);
    }

});