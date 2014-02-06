// The Menu items and links
var menu = [
  {
    title: "Page A (Cats)",
    url  : "#diary"
  },
  {
    title: "Page B (Dogs)",
    url  : "simple-page-b.html"
  },
  {
    title: "Page C (Elephants)",
    url  : "simple-page-c.html"
  }
];

// For this "simple demo" we can change event to "pageinit", but for the more advanced features, it has to be bound to "pageshow"
$(document).on("pageshow", function (event) {

  var items = '', // menu items list
    ul = $(".mainMenu:empty");  // get "every" mainMenu that has not yet been processed

  for (var i = 0; i < menu.length; i++) {
    items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>';
  }

  ul.append(items);
  ul.listview('refresh'); // use cache, as ".mainMenu:empty" will no longer work (append called!)

});



//Login Stuff


//Loading Bar
$(document).on('pagebeforeshow', '#index', function(){ 
    $('<input>').appendTo('[ data-role="content"]').attr({'name':'slider','id':'slider','data-highlight':'true','min':'0','max':'100','value':'50','type':'range'}).slider({
        create: function( event, ui ) {
            $(this).parent().find('input').hide();
            $(this).parent().find('input').css('margin-left','-9999px'); // Fix for some FF versions
            $(this).parent().find('.ui-slider-track').css('margin','0 15px 0 15px');
            $(this).parent().find('.ui-slider-handle').hide();
        }
    }).slider("refresh");      
    
    // Test
    var i = 1;
    var interval = setInterval(function(){
        progressBar.setValue('#slider',i);
        if(i === 100) {
            clearInterval(interval);
        }
        i++;
    },100);    
});

var progressBar = {
    setValue:function(id, value) {
        $(id).val(value);
        $(id).slider("refresh");
    }
}