$(document).ready(function(){

    var d1=true;
    var d2=true;
    var d3=true;
    $("#dong1").mouseenter(function(){
        $("#dong1 h1").animate({top:'-100px'});
        $("#dong1 div").animate({top:'-100px'});
        $("#dong1 div").fadeIn("slow");
    });
    $("#dong2").mouseenter(function(){
        $("#dong2 h1").animate({top:'-100px'});
        $("#dong2 div").animate({top:'-100px'});
        $("#dong2 div").fadeIn("slow");
    });
    $("#dong3").mouseenter(function(){
        $("#dong3 h1").animate({top:'-100px'});
        $("#dong3 div").animate({top:'-100px'});
        $("#dong3 div").fadeIn("slow");
    });
   $("#li1").click(function(){

       $("#gz1").css("display","block");
       $("#gz2").css("display","none");
   });
    $("#li2").click(function(){
        $("#gz2").css("display","block");
        $("#gz1").css("display","none");
    });
});