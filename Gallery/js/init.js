(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();

  setInterval(function(){
    $('.carousel').carousel('next');
  }, 2000);
});


