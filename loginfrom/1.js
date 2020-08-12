
function validation() {

    var username = document.getElementById('unm').value;
    var pwd = document.getElementById('pwd').value;

    var usernamecheck = /^[A-Za-z0-9.@]{3,12}$/;
    var pwdcheck = /^([a-zA-Z0-9]{3,12})([@]{1,})([0-9]{1,})$/;

    if (usernamecheck.test(username)) {
        document.getElementById('usererror1').innerHTML = "Valid";
    } else {
        document.getElementById('usererror').innerHTML = "Invalid Username";
    }

    if (pwdcheck.test(pwd)) {
        document.getElementById('pwderror1').innerHTML = " Valid";
    } else {
        document.getElementById('pwderror').innerHTML = "Invalid Password";
    }

}