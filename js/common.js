$(document).ready(function(){




  $(".owl-carousel").owlCarousel({

  	dots: true,
  	margin: 200,
  	autoplay: true,
  	autoplayTimeout: 3500,
  	loop: true,

});


});

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
