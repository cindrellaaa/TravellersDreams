//navbar
type="text/javascript">
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
                $('nav').addClass('black');
            }
            else{
                $('nav').removeClass('black');
            }
        })
        $(document).ready(function(){
          $('.menu-toggle').click(function(){
            // Toggle the class for the icon
            $('.menu-toggle i').toggleClass('fa-bars fa-xmark');
      
            // Toggle the class for the background
            $('nav').toggleClass('black');
          });
        });

AOS.init({
    duration: 1200
});

$(document).ready(function(){

    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('nav').addClass('black');
      });

    $('.fleet .owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});

// swiper start
var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// whatsapp chat
$(document).on("click", "#send-it", function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=+971 54 590 0734" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function () {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new").addClass("show").removeClass("hide"),
        $(".home-chat,.head-home").addClass("hide").removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function () {
      $("#whatsapp-chat").addClass("hide").removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function () {
      $("#whatsapp-chat").addClass("show").removeClass("hide");
    });
