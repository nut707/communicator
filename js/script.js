$(document).ready(function($) {
  
  $('#catalog-dropdown').click(function(event){
    console.log('sdgdfgdfg')
    $('.catalog-dropdown-wrapper').slideToggle()
  });

  $('video').click(function(){
    if (this.paused){
      this.play();
      $(this).attr('controls','');
    }
    else{
      this.pause();
    }
  });

});