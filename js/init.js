
$(document).ready(function(){
   $('.unhovered1').on("mouseenter",function(){
      $('.unhovered1').css("opacity",0);
      $('.hovered1').css("opacity",1);
      $('.hovered1').css("transform","scale(1,1)");
   });
   $('.hovered1').on("mouseleave",function(){
      $('.unhovered1').css("opacity",1);
      $('.hovered1').css("opacity",0);
      $('.hovered1').css("transform","scale(0,0)");
   });
});
