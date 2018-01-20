$(document).ready(function(){
  $('#hero').height($(window).height()-80);
});


/*   $(".menu li:nth-child(1)").click(function() {
    $('html, body').animate({
      scrollTop: $("#hero").offset().top
    }, 1000);
  });    */

   document.getElementById("myButton").onclick = function () {
    location.href = "http://www.elvusion.com";
  };

  $(".menu li:nth-child(2)").click(function() {
    $('html, body').animate({
      scrollTop: $("#services").offset().top
    }, 1000);
  });

  $(".menu li:nth-child(3)").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  });

  /*   $(".menu li:nth-child(4)").click(function() {
    $('html, body').animate({
      scrollTop: $("#committee").offset().top
    }, 1000);
  });

  $(".menu li:nth-child(5)").click(function() {
    $('html, body').animate({
      scrollTop: $("#impact").offset().top
    }, 1000);
  });

  $(".menu li:nth-child(6)").click(function() {
    $('html, body').animate({
      scrollTop: $("#join").offset().top
    }, 1000);
  });

  $(".menu li:nth-child(7)").click(function() {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });     */

$(".menu-btn").click(function() {
  $('.menu').slideToggle();
  $('.menu').css('overflow', 'visible');
});

$(".login-menu li").click(function() {
  $('#overlay').fadeToggle();
  $('.modal').fadeToggle();
});

$("#overlay").click(function() {
  $('#overlay').fadeToggle();
  $('.modal').fadeToggle();
});

$(".mheader i").click(function() {
  $('#overlay').fadeToggle();
  $('.modal').fadeToggle();
});


/*

$(document).ready(function(){

  var native_width = 0;
  var native_height = 0;

  //Now the mousemove function
  $(".magnify").mousemove(function(e){
    //When the user hovers on the image, the script will first calculate
    //the native dimensions if they don't exist. Only after the native dimensions
    //are available, the script will show the zoomed version.
    if(!native_width && !native_height)
    {
      //This will create a new image object with the same image as that in .small
      //We cannot directly get the dimensions from .small because of the 
      //width specified to 200px in the html. To get the actual dimensions we have
      //created this image object.
      var image_object = new Image();
      image_object.src = $(".small").attr("src");
      
      //This code is wrapped in the .load function which is important.
      //width and height of the object would return 0 if accessed before 
      //the image gets loaded.
      native_width = image_object.width;
      native_height = image_object.height;
    }
    else
    {
      //x/y coordinates of the mouse
      //This is the position of .magnify with respect to the document.
      var magnify_offset = $(this).offset();
      //We will deduct the positions of .magnify from the mouse positions with
      //respect to the document to get the mouse positions with respect to the 
      //container(.magnify)
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;
      
      //Finally the code to fade out the glass if the mouse is outside the container
      if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
      {
        $(".large").fadeIn(100);
      }
      else
      {
        $(".large").fadeOut(100);
      }
      if($(".large").is(":visible"))
      {
        //The background position of .large will be changed according to the position
        //of the mouse over the .small image. So we will get the ratio of the pixel
        //under the mouse pointer with respect to the image and use that to position the 
        //large image inside the magnifying glass
        var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
        var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
        var bgp = rx + "px " + ry + "px";
        
        //Time to move the magnifying glass with the mouse
        var px = mx - $(".large").width()/2;
        var py = my - $(".large").height()/2;
        //Now the glass moves with the mouse
        //The logic is to deduct half of the glass's width and height from the 
        //mouse coordinates to place it with its center at the mouse coordinates
        
        //If you hover on the image now, you should see the magnifying glass in action
        $(".large").css({left: px, top: py, backgroundPosition: bgp});
      }
    }
  })
})

*/
