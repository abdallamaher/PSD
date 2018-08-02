/*global $, alert, console*/
$(function () {
  'use strict';
	
	// Adjust slider Height
	$('.slider, .carousel-item').height($(window).height());
	$(window).resize(function () {
        $('.slider, .carousel-item').height($(window).height());
    });
	
	$(window).scroll(function () {
		var navbar = $('.navbar');
		$(window).scrollTop() < navbar.height() + 70 ? navbar.fadeIn() : navbar.fadeOut();
	});
	
	// Smooth Scroll To Div 
    $('.navbar .link li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        console.log('#' + $(this).data('value'));
    });
	
  // Featured Work Shuffle
  $('.work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .all').css('opacity', 1);
    } else {
      $('.shuffle-imgs .all').css('opacity', '.08');
      $($(this).data('class')).css('opacity', 1);
    }
  });
	
  // Caching The Scroll Top Element
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
        scrollButton.show();
    } else {
        scrollButton.hide();
      }
    });
    
    // Click On Button To Scroll Top
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop : 0 }, 600);
    });
	
});

// Loading Screen
$(window).on('load', function() {
    "use strict";
    $(".spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });
});