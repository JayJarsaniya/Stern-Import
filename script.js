// menu show and hide 

$(".nav-bar i").click(function () {
  $(".nav2").show("slow");
});

$(".close-btn i").click(function () {
  $(".nav2").hide("slow");
});
$(".nav-bar2 a").click(function () {
  $(".nav2").hide("slow");
});
$(".close-btn i,.nav-bar2 a").click(function () {
  $(".body").css({
    overflow: "scroll"
  });
});
$(".nav-bar i").click(function () {
  $(".body").css({
    overflow: "hidden"
  });
});



// wow js

new WOW().init();

//back to top button

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

