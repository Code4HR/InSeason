$.getJSON('http://inseason.azurewebsites.net/animals', function (data) {
    $.each(data, function (key, value) {
        if (value.key === "pheasant") {
            $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-turkey material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>');
        } else if (value.key === "weasel") {
            $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-muskrat material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>');
        } else if (value.key === "raccoon") {
            $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-racoon material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>');
        } else if (value.key === "mink") {
            $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-muskrat material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>');
        } else {
            $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-' + value.key + ' material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>');
        }
    });
});