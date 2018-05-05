(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.querySelectorAll('a[href^="#_"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

(function ($) {
$(document).ready(function() {

  $(document).on('click.card', '.card', function (e) {
    if ($(this).find('> .card-reveal').length) {
      if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
        // Make Reveal animate down and display none
        $(this).find('.card-reveal').velocity(
          {translateY: 0}, {
            duration: 225,
            queue: false,
            easing: 'easeInOutQuad',
            complete: function() { $(this).css({ display: 'none'}); }
          }
        );
        $(this).find('.card-content>span').attr('style', '');
      }
      else if ($(e.target).is($('.card .activator')) ||
               $(e.target).is($('.card .activator i')) ) {
        $(e.target).closest('.card').css('overflow', 'hidden');
        $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
      }
    }

    $('.card-reveal').closest('.card').css('overflow', 'hidden');

  });

   // Make Reveal animate up and display when mouseenter
  $(document).on('mouseenter.hover-reveal','.hover-reveal', function (e){
    $(e.target).closest('.card').css('overflow', 'hidden');
    $(this).find('.card-content>span').attr('style', 'color: rgba(0,0,0,0) !important');
    $(this).find('.card-reveal').css({ display: 'block'})
      .velocity("stop", false)
      .velocity({translateY: '-100%'},
      {duration: 300,
       queue: false,
       easing: 'easeInOutQuad'});
  });

  // Make Reveal animate down and display none when mouseleave
  $(document).on('mouseleave.hover-reveal','.hover-reveal', function (e){
    $(this).find('.card-reveal').velocity(
      {translateY: 0}, {
        duration: 225,
        queue: false,
        easing: 'easeInOutQuad',
        complete: function() { $(this).css({ display: 'none'}); }
      }
    );
    $(this).find('.card-content>span').attr('style', '');
  });

  $('li').on('click', function(){
      var clicked = $(this);
      $('li').each(function(){
          if($(this).hasClass('active')){
              $(this).removeClass('active');
          }
      });
      $(this).addClass('active');
  });

  $(window).scroll(function() {
    var div;
    if ($(this).scrollTop() >= $('#_about').offset().top - 100) {
      div = $('#nav-list > :eq(0)')[0];
    }
    if ($(this).scrollTop() >= $('#_work_experience').offset().top - 100) {
      div = $('#nav-list > :eq(1)')[0];
    }
    if ($(this).scrollTop() >= $('#_projects').offset().top - 100) {
      div = $('#nav-list > :eq(2)')[0];
    }
    if ($(this).scrollTop() >= $('#_education').offset().top - 100) {
      div = $('#nav-list > :eq(3)')[0];
    }
    // if ($(this).scrollTop() >= $('#_contact').offset().top - 100) {
    //   div = $('#nav-list > :eq(4)')[0];
    // }

    $('li').each(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }
    });
    $(div).addClass('active');
  });

});
}( jQuery ));
