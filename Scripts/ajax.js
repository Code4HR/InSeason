$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
         $("#animalList").append('<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>' + value.human + '</a>');
       });
   });
