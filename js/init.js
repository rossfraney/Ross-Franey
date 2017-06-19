(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function($){
	$(document).ready(function(){
		$("a[href^='#']").click(function(){
			$(document.body).animate({
				'scrollTop':   $($(this).attr('href')).offset().top
			}, 50);
		})
	});
})(jQuery);

$(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});
