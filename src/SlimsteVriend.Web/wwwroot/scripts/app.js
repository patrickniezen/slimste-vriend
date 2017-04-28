$(document).ready(function () {
    setInterval(function () {
        $.get("api/ranking", function (data) {
            console.log(data);
        });
    }, 1000);
});