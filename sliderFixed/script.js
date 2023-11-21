$(".owl-carousel-stacked").on(
  "dragged.owl.carousel translated.owl.carousel initialized.owl.carousel",
  function(e) {
    $(".center")
      .prev()
      .addClass("left-of-center");
    $(".center")
      .next()
      .addClass("right-of-center");
  }
);

$(".owl-carousel-stacked").on("drag.owl.carousel", function(e) {
  $(".left-of-center").removeClass("left-of-center");
  $(".right-of-center").removeClass("right-of-center");
});

$(".owl-carousel-stacked").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 3,
  center: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  
  navText: [
    '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-left fa-stack-1x"></i></span>',
    '<span class="fa-stack fa-lg"><i class="fa fa-circle-thin fa-stack-2x" ></i><i class="fa fa-caret-right fa-stack-1x"></i></span>'
  ]
});

$(".owl-carousel-stacked").on("translate.owl.carousel", function(e) {
  $(".left-of-center").removeClass("left-of-center");
  $(".right-of-center").removeClass("right-of-center");
});