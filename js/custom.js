$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    loop: true,
    rewind: true,
    responsive: {
      0: {
        items: 2,
      },

      600: {
        items: 4,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
  });
});

/******************* specialists ***********************/

$("#specialists").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayTimeout: 2500,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
});

/******************* Top Doctor ***********************/

$("#doctor").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplayTimeout: 2500,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
});

/******************* Testimonial ***********************/

$("#testomonial").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplayTimeout: 2500,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
});

/************* Back to Top Button***************/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
