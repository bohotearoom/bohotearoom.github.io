
$(document).ready(function() {
    $('.menu-trigger').on("click", function(){
		$(this).next().toggleClass('active');
	});
	$('.close-menu a').on("click", function(){
		$(this).parent().parent().toggleClass('active');
	});
	if ($('body').hasClass('contact__page')){
	} else {
		$('.hero').slick({
			arrows:false,
			lazyLoad: 'progressive',
  			slidesToScroll: 1,
  			dots: false,
  			autoplay: true,
  			autoplaySpeed: 5000,
  			infinite: true,
  			speed: 300,
		});
	}
});


