$(document).ready(function() {
	$('nav a').on('click', function() {
		// current class assignment
		$('nav li.current').removeClass( 'current' );
		$( this ).parent().addClass();

		// set heading text
		$('h1#heading').text($(this).text());

		// get and filter link text/ replace space with dash
		var catagory = $(this).text().toLowerCase().replace(' ', '-');

		// remove hidden class if "all projects" is selected
		if (catagory == 'home') {
			$('ul#gallery li:hidden').fadeIn( 'slow' ).removeClass( 'hidden' );
		} else { // if not all projects but is project specific then...filter by class
			$('ul#gallery li').each( function() {
				if (!$(this).hasClass(catagory)) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn( 'slow' ).removeClass('hidden');
				}
			});
		}
		// stop link behaviour
		return false;

	});
	// Mouse Enter Event
	$('ul#gallery li').on('mouseenter', function() {
		// Get data attribute values from data-title, data-desc
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// validate if there is the data or it has been left blank
		if(desc == null) {
			desc = 'click to enlarge';
		}
		if(title == null) {
			title = '';
		}

		// create and insert a div into html 
		$(this).append('<div class="overlay"></div>');

		// acquire overlay
		var overlay = $(this).children('.overlay');

		// add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		// fade in overlay
		overlay.fadeIn(800);
	});
	// Mouse Leave Event
	$('ul#gallery li').on('mouseleave', function() {

		// insert div
		$(this).append('<div class="overlay"></div>');

		// acquire overlay
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	})
});