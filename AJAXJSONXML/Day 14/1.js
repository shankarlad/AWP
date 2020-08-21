// Using jQuery

let forCast = () => {

    let city = $("#cityValue").val();

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=063e476daab9b1443ff2a27342f36996&units=metric";

    $.ajax(url).done((data) => {
        domHandler(data);
    });
};

let domHandler = (data) => {
    $(".body").css("background", "url(https://picsum.photos/id/149/1200/1300)");

    $("#displayValue :nth-child(1)").html("City :" + data.name).css("color", "lime");
    $("#displayValue :nth-child(2)").html(new Date()).css("color", "lime");
    $("#displayValue :nth-child(3)").html("Weather :" + data.weather[0].main).css("color", "lime");
    $("#displayValue :nth-child(4)").html("Tempreture : " + data.main.temp + "\xB0" + 'c').css("color", "lime");
    $("#displayValue :nth-child(5)").html("Min_Temp : " + data.main.temp_min + "\xB0" + 'c').css("color", "lime");
    $("#displayValue :nth-child(6)").html("Max_Temp : " + data.main.temp_max + "\xB0" + 'c').css("color", "lime");

    $("#displayValue").css("visibility", "visible");

    $("#cityValue").val("");
};