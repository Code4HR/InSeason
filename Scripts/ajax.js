$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
         $("#animalList").append('<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>'
                                  + value.human + '</a>');
         if(value.human =="Bear") {
           console.log("Bear");
         }
         else if(value.human =="Beaver") {
           console.log("Beaver");
         }
         else if(value.human =="Bobcat") {
           console.log("Bobcat");
         }
         else if(value.human =="Coyote") {
           console.log("Coyote");
         }
         else if(value.human =="Crow") {
           console.log("Crow");
         }
         else if(value.human =="Deer") {
           console.log("Deer");
         }
         else if(value.human =="Feral Hogs") {
           console.log("Feral Hogs");
         }
         else if(value.human =="Groundhog") {
           console.log("Groundhog");
         }
         else if(value.human =="Grouse") {
           console.log("Grouse");
         }
         else if(value.human =="Mink") {
           console.log("Mink");
         }
         else if(value.human =="Muskrat") {
           console.log("Muskrat");
         }
         else if(value.human =="Nutria") {
           console.log("Nutria");
         }
         else if(value.human =="Opossum") {
           console.log("Opossum");
         }
         else if(value.human =="Otter") {
           console.log("Otter");
         }
         else if(value.human =="Pheasant") {
           console.log("Pheasant");
         }
         else if(value.human =="Quail") {
           console.log("Quail");
         }
         else if(value.human =="Quail") {
           console.log("Quail");
         }
         else if(value.human =="Rabbit") {
           console.log("Rabbit");
         }
         else if(value.human =="Raccoon") {
           console.log("Raccoon");
         }
         else if(value.human =="Skunk") {
           console.log("Skunk");
         }
         else if(value.human =="Squirrel") {
           console.log("Squirrel");
         }
         else if(value.human =="Turkey") {
           console.log("Turkey");
         }
         else if(value.human =="Weasel") {
           console.log("Weasel");
         }
       });
   });
