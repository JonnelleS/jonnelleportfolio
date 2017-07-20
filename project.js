$("#home").click(function() {
    $("#home").append("No, I am your father.") ;
});

$("#about").click(function() {
    $("#about").append("I love you!... I know.") ;
});
$("#go").click(function() {
   var url = $("#menu1 option:selected").val();
    window.open(url);
});
