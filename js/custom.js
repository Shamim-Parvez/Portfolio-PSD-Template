

  $(document).ready(function(){

    $(".slide-btn").click(function(){
      $(".mobile-menu-nav").toggleClass("active");
      $(".slide-btn").toggleClass("slide-is");
      });
      

      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#scroll'
      });

  //  Counterplugin
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  var mixer = mixitup('.images'); 

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 2,
      loop: true,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:2,
              nav:true,
              loop:false
          }
      }
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay')
    });
  });

	// var nice = $("html").niceScroll({
  //   cursorcolor: "#f39c12",
  //   cursorborder: "1px solid #f39c12",
  //   cursorwidth: "3px",
  //   scrollspeed:60,
  //   mousescrollstep:40,
  // }); 


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }
  });




  });
  function openNav(){
    document.getElementById("nav-bar").style.width = "100%"
  }
  function closeNav(){
    document.getElementById("nav-bar").style.width = "0"
  }