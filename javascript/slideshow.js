$("#slideshow > div:gt(0)").hide();

		setInterval(function() { 
		  $('#slideshow > div:first')
		    .fadeOut()
		    .next()
		    .fadeIn()
		    .end()
		    .appendTo('#slideshow');
		},  180);