
$(document).ready(function($) {

  $('.slide').click(function() {
    var url=$(this).find('img').attr('src')
    $('.zoom img').attr('src', url)
    $('.pager .active').removeClass('active')
    $(this).addClass('active')

  });
  //show cart button on catalog
  $('.item').hover(function(){
    $(this).find('.to-cart').toggleClass('show')
  })

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