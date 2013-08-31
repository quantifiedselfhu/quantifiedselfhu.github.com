/*******

	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	You can use and modify this script for any project you want, but please leave this comment as credit.
	
*****/
		
$(document).ready(function() {
	anchor.init()
});

anchor = {
	init : function()  {
		$("a[href*=#]").click(function () {	
			elementClick = $(this).attr("href")
			if (!$(elementClick).length) return
			destination = $(elementClick).offset().top - $('nav').height();
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1100 );
		  	return false;
		})
	}
}


var setNavigationTop = function () {
	$('body').attr('data-offset', Math.max(0, $('nav').height()))
	$('.qs .section .navigation .nav > li.active > a').css('top', $('nav').height());
}
$(setNavigationTop)
$(window).scroll(setNavigationTop)
$(window).resize(setNavigationTop)
