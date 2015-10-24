$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
        //  console.log(value);
         $("body").append(<p>value</p>);
       });
   });
