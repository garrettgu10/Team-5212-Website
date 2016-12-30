
$(window).on("load", function(){
   $(".badge.unhovered").css("transform","scale(1,1)");
   $(".image-title").css({"opacity": 1, "top": "0%"});
   $(".button-collapse").sideNav();
   $('.parallax').parallax();
   var colors=["red","blue", "green", "teal", "light-blue"];
   var donateColor = colors[Math.floor(Math.random()*colors.length)];
   $('.donate').addClass(donateColor);

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
      clone.addClass("enlarged");
      clone.css({"transition":"0s",
         "position": "absolute",
         "left": $(this).position().left - $(window).scrollLeft(),
         "top": $(this).position().top - $(window).scrollTop(),
         "cursor": "zoom-out"});

      $(".shade").css({
         "display": "inline",
         "opacity": 1});
      $(".shade").append(clone);
      $(".real-shade").animate({"opacity":1}, 500, "swing");
      clone.animate({
            "width": cloneDiameter+"px", "height": cloneDiameter+"px",
            "left": $(window).width()/2-cloneDiameter/2+"px",
            "top": $(window).height()/2-cloneDiameter/2+"px"
         }, function(){
            $(this).css({
               "position": "relative",
               "left": "50%", "top": "50%",
               "margin-left": -($(this).width()/2)+"px", "margin-top": -($(this).width()/2)+"px"});
         });
   });
   $(".shade").on("click", function(){
      $(this).animate({"opacity":0}, 500, "swing", function(){
         $(this).children(".img-circle").remove();
         $(this).children(".real-shade").css("opacity", 0);
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
