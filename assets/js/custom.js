(function($) {
  "use strict";

	// ______________SHOW TOP BAR
 $(window).load(function() {
  $('#showtopbar').click(function() {
		$("html, body").animate({ scrollTop: 0 }, 600);
    $('.the-top-bar').slideToggle("slow");
		$("i",this).toggleClass("fa fa-bars fa fa-times");
  });
});

 // ______________ RESPONSIVE MENU
 $(function() {
	 //Clone both menus to keep them intact
	 var combinedMenu = $('#main-nav').clone();
	 var secondMenu = $('#topmenu').clone();
	 secondMenu.children('li').appendTo(combinedMenu);
	 combinedMenu.slicknav({
	     duplicate:false,
			 label: "",
	     closedSymbol: "&#8594;",
	     openedSymbol: "&#8595;"
	 });
	});

// ______________ FEATURED POSTS HOME
    $(document).ready(function() {
      $("#hw-the-slider").owlCarousel({
          navigation : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
					autoPlay: 7500
      });
    });

// ______________ MASONRY
$(window).load(function() {
 var $container = $('.postscontainer');
  $container.masonry({
    itemSelector : '.block-grid-item',
    isResizable : 'true',
		percentPosition: true,
  });
	 $container.masonry('layout');
 });


// ______________ SHARED BUTTONS POPOVER
 $('[rel="shared-popover"]').popover({
    trigger: 'click',
    container: 'body',
    html: true,
    template: '<div class="popover sharing" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    content: function () {
      var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
      return clone;
    }
  }).click(function(e) {
    e.preventDefault();
  });


// ______________ JUSTIFIED GALLERY
$(document).ready(function() {
  $("#gallery-post").justifiedGallery({
   rowHeight: 200,
   maxRowHeight: 0,
   margins: 5,
   border: 0,
   rel : 'lightbox',
   lastRow: 'nojustify',
   fixedHeight: false,
   captions: false,
   randomize: false
 });
});

// ______________ MAGNIFIC POPUP
$('.lightbox').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  },
  retina: {
    ratio: 1,
    replaceSrc: function(item, ratio) {
      return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
    } // function that changes image source
  }
});

// ______________ BACK TO TOP BUTTON
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('#back-to-top').fadeIn('slow');
      } else {
        $('#back-to-top').fadeOut('slow');
      }
    });
    $('#back-to-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

  })(jQuery);
