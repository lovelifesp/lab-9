$("li").hover(function() {
 $(this).fadeTo("fast", 0.25);
 $(this).fadeTo("fast", 1);
/* $(this).fadeOut(500);*/
});


$("li").hover(function(){
  $(this).css("background-color", "black");
});


$("li").click(function(){
    $("li").text("Clicked!");

});
