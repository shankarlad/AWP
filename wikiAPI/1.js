
//let surl = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=';

let search = async () => {

    let language;

    let searchterm = document.querySelector("#search").value;
    let lang = document.querySelector("#select").value


    if (lang === "English") {
        language = "en";
    } if (lang === "Hindi") {
        language = "hi";
    } if (lang === "Marathi") {
        language = "mr";
    } if (lang === "Sanskrit") {
        language = "sa";
    } if (lang === "Spanish") {
        language = "es";
    } if (lang === "Portuguese") {
        language = "pt";
    } if (lang === "Italian") {
        language = "it";
    } if (lang === "Japanese") {
        language = "ja";
    }

    let url = `https://${language}.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=${searchterm}`;


    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = () => {
        let jsonData = JSON.parse(xhr.responseText);
        let data = jsonData;
        domHandler(data);
    }
    xhr.send();

}

let domHandler = (data) => {
    for (let i = 0; i < 10; i++) {
        let x = data[3][i];
        let y = x.split("/");
        document.querySelector("#q" + [i + 1]).href = x;
        document.querySelector("#q" + [i + 1]).innerHTML = y[4];
    }
}

