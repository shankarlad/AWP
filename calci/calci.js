
let clean = function () {

    document.getElementById('output').value = "";

};

let add = function (num) {

    document.getElementById('output').value = document.getElementById('output').value + num;
};


function equal() {

    var exp = document.getElementById('output').value;
    if (exp) {
        document.getElementById('output').value = eval(exp);
    }
}



/*
let evaluate = function () {

    document.querySelector('#output').value = eval(document.querySelector('#output').value);

};

document.querySelector("equal").onclick = function () {
    evaluate();
}
*/