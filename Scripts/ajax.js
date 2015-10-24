$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-' + value.human + ' material-icons"></span>'
                                    + value.human + '</a>');
       });
   });
