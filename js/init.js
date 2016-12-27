
$(window).on("load", function(){
   $(".badge.unhovered").css("transform","scale(1,1)");
   $(".image-title").css({"opacity": 1, "top": "0%"});
   $(".button-collapse").sideNav();

   $(".badge-container").on("mouseenter",function(){
      $(this).children(".unhovered").css("opacity",0);
      $(this).children(".hovered").css("opacity",1);
      $(this).children(".hovered").css("transform","scale(1.5,1.5)");
   });
   $(".badge-container").on("mouseleave",function(){
      $(this).children(".unhovered").css("opacity",1);
      $(this).children(".hovered").css("opacity",0);
      $(this).children(".hovered").css("transform","scale(0,0)");
   });
   $(".header").scrollfire({
      offset: 0,
      topOffset: $(window).height()/2+100,
      bottomOffset: 0,
      onBottomIn: function(elm, distanceScrolled){
         setActiveNav($(elm).attr("class").split(" ")[0]);
      },
      onTopIn: function(elm, distanceScrolled){
         setActiveNav($(elm).attr("class").split(" ")[0]);
      },
      onBottomOut: function(elm, distanceScrolled){
         if($(elm).attr("class").split(" ")[0] == "about")
            setActiveNav(null);
      }
   });

   $(".img-circle").on("click", function(){
      var clone = $(this).clone();
      var cloneDiameter = min($(window).height(),$(window).width())*0.8;
      clone.css({
         "position": "relative",
         "width": cloneDiameter+"px", "height": cloneDiameter+"px",
         "left": "50%", "top": "50%",
         "margin-left": -(cloneDiameter/2)+"px", "margin-top": -(cloneDiameter/2)+"px",
         "cursor": "zoom-out"
      });
      $(".shade").css("display", "inline");
      $(".shade").append(clone);
      $(".shade").animate({"opacity":1}, 500, "swing");
   });
   $(".shade").on("click", function(){
      $(this).animate({"opacity":0}, 500, "swing", function(){
         $(this).children(".img-circle").remove();
         $(this).css("display","none");
      });
   });
});

function min(a, b){
   return a<b? a:b;
}

function scrollTo(headerName){
   $("html, body").animate({ scrollTop: $("."+headerName+".header").position().top-50 }, 500, "swing");
   $('.button-collapse').sideNav('hide');
}

function setActiveNav(sectionName){
   $(".nav").removeClass('active');
   $("."+sectionName+".nav").addClass('active');
}
