//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

   $("#box").hide();

   $("#click").click(function (){
    $("#box").toggle();

   }); 


   
   $("#reset").click(function (){
    $("#box").hide();
    $("#box").css("background-color", "cadetblue")
    $("#box").css ({width: "320px", height: "300px"})
   });

   $("#nametag").click(function (){
    $("#box").css("background-color", "brown");
   });

   $("#box").click(function (){
    $("#box").animate ({width: "100px", height: "80px"});

   });


}); 