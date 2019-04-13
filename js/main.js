$(document).ready(function() {
	$('.nav-icon__btn').click(function() {
		$('.nav').slideToggle();
		$('.nav-icon__btn').toggleClass('active');
	});
	
	$('.accordeon__header').click(function(){
		$(this).children('.icon-close').toggleClass('active');
		$(this).next().slideToggle(200);
		$('.icon-close').not($(this).children()).removeClass('active').parent().next().slideUp(200);
	})

});