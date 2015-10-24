$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-' + value.key + ' material-icons" style="font-size: 2.5em"></span>'
                                    + value.human + '</a>');
       });
   });
