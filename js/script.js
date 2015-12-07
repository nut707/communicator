
$(document).ready(function($) {
  
  //dropdown on header
  $('#catalog-dropdown').click(function(){
    $('.catalog-dropdown-wrapper').slideToggle()
  });

  //dropdown sort on catalog page
  $('.sort-button').click(function(){
    $('.sort-dropdown').slideToggle()
  })
  $('.sort-dropdown div').click(function(){
    $('.sort-button .text').text($(this).text())
    $('.sort-dropdown').slideToggle('fast')
    $('.sort-dropdown .active').removeClass('active')
    $(this).addClass('active')
    
  })

  //video
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