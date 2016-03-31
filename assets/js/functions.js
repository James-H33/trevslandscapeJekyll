$(document).ready(function(){

  $('#nav-icon').on('click', function() {

    $('#nav-icon span').toggleClass('open');

    $('body').toggleClass('slide-open');

  });

});
