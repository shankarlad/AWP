
let forCast = () => {

    let city = document.querySelector("#cityValue").value;

    let xhr = new XMLHttpRequest();

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=063e476daab9b1443ff2a27342f36996&units=metric";

    xhr.open("GET", url);

    xhr.onload = () => {
        let jsonData = JSON.parse(xhr.responseText);
        domOperation(jsonData);
    };

    xhr.send();
};

let domOperation = (data) => {

    let backg = document.querySelector(".body");
    backg.style.background = "url(https://picsum.photos/1200/1300)";

    let outputBox = document.querySelector("#displayValue");
    outputBox.style.visibility = "visible";

    outputBox.children[0].innerHTML = "City : " + data.name;
    outputBox.children[1].innerHTML = new Date();
    outputBox.children[2].innerHTML = "Weather :" + data.weather[0].main;
    outputBox.children[3].innerHTML = "Tempreture : " + data.main.temp + "\xB0" + 'c';
    outputBox.children[4].innerHTML = "Min_Temp : " + data.main.temp_min + "\xB0" + 'c';
    outputBox.children[5].innerHTML = "Max_Temp : " + data.main.temp_max + "\xB0" + 'c';

    document.querySelector("#cityValue").value = "";
};
/*
https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=063e476daab9b1443ff2a27342f36996&units=metric
*/