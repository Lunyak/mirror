
$(".order-item-more").click(function() {
  $('.order-product-drop-discription').fadeIn();
  $('.order-item-more').fadeOut();
})

$('.close-drop-discription').on('click', function(){
  $('.order-product-drop-discription').fadeOut();
  $('.order-item-more').fadeIn();
});



$('#catalog-btn-basket').on('click', function(){
  $(".order-popup-formalized").css("display", "flex").hide().fadeIn();
});

$('.close-popup').on('click', function(){
  $(".order-popup-formalized").css("display", "flex").show().fadeOut();
});

$('.order-product-popup-close').on('click', function(){
  $(".order-product-popup").css("display", "flex").show().fadeOut();
});
$('.order-item-close img').on('click', function(){
  $(".order-product-popup").css("display", "flex").hide().fadeIn();
});