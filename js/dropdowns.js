$(document).ready(function($) {
  
  $('#catalog-dropdown').click(function(event){
    console.log('sdgdfgdfg')
    $('.catalog-dropdown-wrapper').slideToggle()
  });

  $('video').click(function(){this.paused?this.play():this.pause();});

});
