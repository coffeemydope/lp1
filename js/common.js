$(document).ready(function() {
	
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		}
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .s_header").animated("fadeInUp", "fadeOutDown");

	$(".popup_img").magnificPopup({type:"image"});
	$(".popup").magnificPopup();

	$(".animation_1").animated("flipInY", "fadeOutUp");
	$(".animation_2").animated("fadeInLeft", "fadeOutUp");
	$(".animation_3").animated("fadeInRight", "fadeOutUp");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutUp");
	$(".right .resume_item").animated("fadeInRight", "fadeOutUp");

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podr_descr").attr("id", "work_" + i);
	});

	$(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}); 