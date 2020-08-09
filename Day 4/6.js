
let counter = 0;

function increase() {
    counter = counter + 1;
    document.querySelector(".num").innerHTML = counter;
};

function decrease() {
    counter = counter - 1;
    document.querySelector(".num").innerHTML = counter;
};
