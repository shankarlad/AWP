// if else statment
/*****************************/
var name = 'Shankar';
var age = 13;

if (age < 13) {
    console.log(name + ' is a young boy.');
} else if (age >= 13 && age < 20) {
    console.log(name + ' is a teenager.');
} else {
    console.log(name + ' is a man.');
}

/*****************************************/
var avgJohn = (89 + 120 + 103) / 3;
var avgMike = (116 + 94 + 123) / 3;
var avgMary = (97 + 134 + 105) / 3;

console.log(avgJohn, avgMike, avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John teams win by ' + avgJohn + ' points');
}
else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike teams win by ' + avgMike + ' points');
}
else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary teams win by ' + avgMary + ' points');
}
else {
    console.log('Match is Draw');
}




// Normal Function
/******************************************/
function calculateAge(birthYear) {

    return 2020 - birthYear;
}

var ageShankar = calculateAge(1995);
var ageBhushan = calculateAge(1998);
var agePhati = calculateAge(1965);
console.log(ageShankar, ageBhushan, agePhati);

function yearsUntilRetirement(firstName, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }

}

yearsUntilRetirement('Shankar', 1995);
yearsUntilRetirement('Bhushan', 1998);
yearsUntilRetirement('Phati', 1954);


// Annonymus Function
/*************************************************/
var whatDoYouDo = function (firstName, job) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches coding to kids ';
        case 'designer':
            return firstName + ' teaches design to kids ';
        default:
            return firstName + ' doing something else';
    }
}

console.log(whatDoYouDo('Shankar', 'teacher'));
console.log(whatDoYouDo('Phati', 'designer'));
console.log(whatDoYouDo('Bhushan', 'retired'));


// Lamda Function
/**********************************************/

var lamdaFun = (firstName, job) => {

    switch (job) {
        case 'teacher':
            return firstName + ' teaches coding to kids ';
        case 'designer':
            return firstName + ' teaches design to kids ';
        default:
            return firstName + ' doing something else';
    }
}

var inputs = lamdaFun('Shankar', 'teacher')
console.log(inputs);