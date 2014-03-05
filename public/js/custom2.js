
jQuery(function($) {
	$(".swipebox").swipebox();
});


$(window).load(function(){
  $(".twentytwenty-container").twentytwenty();
});

    function swapButton() {
      var b = $('#button');
      b.text('Done');
      b.buttonMarkup({ icon: "check" });
      b.button('refresh');
    }