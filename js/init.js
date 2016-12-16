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
