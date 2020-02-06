$(document).ready(function(){
	$('.responsive').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  draggable: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});