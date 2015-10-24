$.getJSON('http://inseason.azurewebsites.net/animals', function(data) {
       $.each(data, function(key,value) {
         if(value.human =="Bear") {
           console.log("Bear");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10 material-icons"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Beaver") {
           console.log("Beaver");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Bobcat") {
           console.log("Bobcat");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Coyote") {
           console.log("Coyote");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Crow") {
           console.log("Crow");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Deer") {
           console.log("Deer");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Feral Hogs") {
           console.log("Feral Hogs");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Groundhog") {
           console.log("Groundhog");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Grouse") {
           console.log("Grouse");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Mink") {
           console.log("Mink");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Muskrat") {
           console.log("Muskrat");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Nutria") {
           console.log("Nutria");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Opossum") {
           console.log("Opossum");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Otter") {
           console.log("Otter");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Pheasant") {
           console.log("Pheasant");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Quail") {
           console.log("Quail");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Quail") {
           console.log("Quail");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Rabbit") {
           console.log("Rabbit");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Raccoon") {
           console.log("Raccoon");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Skunk") {
           console.log("Skunk");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Squirrel") {
           console.log("Squirrel");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Turkey") {
           console.log("Turkey");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
         else if(value.human =="Weasel") {
           console.log("Weasel");
           $("#animalList").append('<a class="mdl-navigation__link" href=""><span class="icon-sea10"></span>'
                                    + value.human + '</a>');
         }
       });
   });
