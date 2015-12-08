//slider-price
$('.slider-price').slider({
  max:20000,
  min:6000,
  step:100,
  range:true,
  values: [ 9300, 15000 ],
  slide: function(event,ui){
    $('.price-min').val(ui.values[0]);
    $('.price-max').val(ui.values[1]);
  }
})
$('.price-min').val($( ".slider-price" ).slider( "values", 0 )),
$('.price-max').val($( ".slider-price" ).slider( "values", 1 )),
$(".price-min,.price-max").change(function() {
  $(".slider-price").slider("option", "values", [ $('.price-min').val(), $('.price-max').val() ] );
});

//slider-display-size
$('.slider-display-size').slider({
  max:12,
  min:1,
  step:1,
  range:true,
  values: [ 2, 9 ],
  slide: function(event,ui){
    $('.display-size-min').val(ui.values[0]);
    $('.display-size-max').val(ui.values[1]);
  }
})
$('.display-size-min').val($( ".slider-display-size" ).slider( "values", 0 )),
$('.display-size-max').val($( ".slider-display-size" ).slider( "values", 1 )),
$(".display-size-min,.display-size-max").change(function() {
  $(".slider-display-size").slider("option", "values", [ $('.display-size-min').val(), $('.display-size-max').val() ] );
});

//slider-ram
$('.slider-ram').slider({
  max:128,
  min:4,
  step:2,
  range:true,
  values: [ 4, 128 ],
  slide: function(event,ui){
    $('.ram-min').val(ui.values[0]);
    $('.ram-max').val(ui.values[1]);
  }
})
$('.ram-min').val($( ".slider-ram" ).slider( "values", 0 )),
$('.ram-max').val($( ".slider-ram" ).slider( "values", 1 )),
$(".ram-min,.ram-max").change(function() {
  $(".slider-ram").slider("option", "values", [ $('.ram-min').val(), $('.ram-max').val() ] );
});