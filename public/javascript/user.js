$(function () {

    if (localStorage.getItem("user")) {
        let user = JSON.parse(localStorage.getItem("user"))
        console.log(user)

        $('#firstname').val(user.first_name);
        $('#lastname').val(user.last_name);

    }
});