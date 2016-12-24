
$(document).ready(function(){
   for(var i = 1; i <= 2; i++){
      $('.unhovered'+i).on("mouseenter",function(){
         $(this).css("opacity",0);
         $(this).next().css("opacity",1);
         $(this).next().css("transform","scale(1,1)");
      });
      $('.hovered'+i).on("mouseleave",function(){
         $(this).prev().css("opacity",1);
         $(this).css("opacity",0);
         $(this).css("transform","scale(0,0)");
      });
   }
   /*$('.unhovered2').on("mouseenter",function(){
      $('.unhovered2').css("opacity",0);
      $('.hovered2').css("opacity",1);
      $('.hovered2').css("transform","scale(1,1)");
   });
   $('.hovered2').on("mouseleave",function(){
      $('.unhovered2').css("opacity",1);
      $('.hovered2').css("opacity",0);
      $('.hovered2').css("transform","scale(0,0)");
   });*/
});

function scrollTo(headerName){
   $("html, body").animate({ scrollTop: $("."+headerName+"-header").position().top }, 500, "swing");
}
