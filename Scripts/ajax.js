$.getJSON('http://inseason.azurewebsites.net/animals', function (data) {
    $.each(data, function (key, value) {
        var val = value.key
        if (value.key === "pheasant") {
            var btn = $('<a id="' + value.human +'" class="mdl-navigation__link""><span class="icon-turkey material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>')
            btn.click(function () {
              console.log($(this).attr("id"));
            });
            $("#animalList").append(btn);
        } else if (value.key === "weasel") {
            var btn = $('<a id="' + value.human +'" class="mdl-navigation__link"><span class="icon-muskrat material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>')
            btn.click(function () {
              console.log($(this).attr("id"));
            });
            $("#animalList").append(btn);
        } else if (value.key === "raccoon") {
            var btn = $('<a id="' + value.human +'" class="mdl-navigation__link" "><span class="icon-racoon material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>')
            btn.click(function () {
              console.log($(this).attr("id"));
            });
            $("#animalList").append(btn);
        } else if (value.key === "mink") {
            var btn = $('<a id="' + value.human +'" class="mdl-navigation__link" "><span class="icon-muskrat material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>')
            btn.click(function () {
              console.log($(this).attr("id"));
            });
            $("#animalList").append(btn);
        } else {
            var btn = $('<a  id="' + value.human +'" class="mdl-navigation__link" onClick="toggle(val)"><span class="icon-' + value.key + ' material-icons" style="font-size: 2.5em"></span>' + value.human + '</a>')
            btn.click(function () {
              console.log($(this).attr("id"));
            });
            $("#animalList").append(btn);
        }
    });
});
