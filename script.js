$(document).ready(function() {
	$('#hero').height($(window).height() - 90);

	function coming() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}

    $("#bt10").on('click', coming);
    $("#bt11").on('click', coming);
    $("#bt12").on('click', coming);
    $("#bt13").on('click', coming);
    $("#bt14").on('click', coming);
    $("#bt15").on('click', coming);
});


$(".menu li:nth-child(1)").click(function() {
    $('html, body').animate({
      scrollTop: $("#hero").offset().top
    }, 1000);
  });
  $(".menu li:nth-child(2)").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  });
  $(".menu li:nth-child(3)").click(function() {
    $('html, body').animate({
      scrollTop: $("#ourworks").offset().top
    }, 1000);
  });
  $(".menu li:nth-child(4)").click(function() {
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
  });

$(".menu-btn").click(function() {
  $('.menu').slideToggle();
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

// window.oncontextmenu = function () {
//   alert('Not here, Noob!');
//   return false;
// }

/* ---- particles.js config ---- */

particlesJS("hero", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 120,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});





