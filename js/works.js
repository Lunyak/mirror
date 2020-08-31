$(document).ready(function () {
  $(".works__slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    draggable: false,
    infinite: false,
  });
});


$(".btn-slider-next").on("click", function () {
  $(".works__slider > .slick-next.slick-arrow").click();
});
$(".btn-slider-prev").on("click", function () {
  $(".works__slider > .slick-prev.slick-arrow").click();
});



$(".btn-arrow-right").on("click", function () {
  $(".works__slider-img > .slick-next.slick-arrow").click();
});
$(".btn-arrow-left").on("click", function () {
  $(".works__slider-img > .slick-prev.slick-arrow").click();
});




// $(".btn-slider-next").on("click", function () {
//   $(".slick-slide").click("slick-current");
// });

// $(".btn-arrow-left").on("click", function () {
//   $(".works__slider-img > .slick-prev.slick-arrow").click();
// });







$(".works__slider").on("init", function (event, slick) {

  $(".works__slider-count").text(
    `${parseInt(slick.currentSlide + 1)} `);

  $(".works__slider-count-2").text(
    ` / ${slick.slideCount}`
  );
});


$(".works__slider").on("afterChange", function (event, slick, currentSlide) {

  $(".works__slider-count").text(
    `${parseInt(slick.currentSlide + 1)} `);

  $(".works__slider-count-2").text(
    ` / ${slick.slideCount}`
  );
});









$(document).on("click", "#works-next-img", function(e) {
  var selectedItem = $('.slider-item').find('.active');
  selectedItem.removeClass('active');
  selectedItem.next().addClass('active');
});

$(document).on("click", "#works-prev-img", function(e) {
  var selectedItem = $('.slider-item').find('.active');
  selectedItem.prev().addClass('active');
  selectedItem.removeClass('active');
});



jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);


    function moveLeft() {
      $('.slider-first ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-first ul li:last-child').prependTo('.slider-first ul');
          $('.slider-first ul').css('left', '');
      });
  };
    // prependTo
    function moveRight() {
        $('.slider-first ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-first ul li:first-child').appendTo('.slider-first ul');
            $('.slider-first ul').css('left', '');
        });
    };

    $('#works-prev-img').click(function () {
        moveLeft();
    });

    $('#works-next-img').click(function () {
        moveRight();
    });
});


jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);


    function moveLeft() {
      $('.slider-second ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-second ul li:last-child').prependTo('.slider-second ul');
          $('.slider-second ul').css('left', '');
      });
  };
    // prependTo
    function moveRight() {
        $('.slider-second ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-second ul li:first-child').appendTo('.slider-second ul');
            $('.slider-second ul').css('left', '');
        });
    };

    $('#works-prev-img').click(function () {
        moveLeft();
    });

    $('#works-next-img').click(function () {
        moveRight();
    });
});


jQuery(document).ready(function ($) {
  let slideWi = $('.active').next().outerWidth(true);

    function moveLeft() {
      $('.slider-third ul').animate({
          left: + slideWi
      }, 700, function () {
          $('.slider-third ul li:last-child').prependTo('.slider-third ul');
          $('.slider-third ul').css('left', '');
      });
  };
    // prependTo
    function moveRight() {
        $('.slider-third ul').animate({
            left: - slideWi
        }, 700, function () {
            $('.slider-third ul li:first-child').appendTo('.slider-third ul');
            $('.slider-third ul').css('left', '');
        });
    };

    $('#works-prev-img').click(function () {
        moveLeft();
    });

    $('#works-next-img').click(function () {
        moveRight();
    });
});

