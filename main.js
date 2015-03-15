
$(document).ready(function() {
    $('.menu-trigger').on("click", function(){
		$(this).next().toggleClass('active');
	});
	$('.close-menu a').on("click", function(){
		$(this).parent().parent().toggleClass('active');
	});
	if ($('body').hasClass('contact__page')){
		initialize();
		function initialize() {
			var myLatlng = new google.maps.LatLng(51.368383,-0.446294);
			var mapOptions = {
			  center: myLatlng,
			  zoom: 17
			};
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			var marker = new google.maps.Marker({
			      position: myLatlng,
			      map: map,
			      title: 'Boho Tea room & coffee shop'
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);
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


