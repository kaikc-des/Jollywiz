$(document).ready(function () {
	$(".nav-toggler").click(function () {
		$("nav").toggleClass("nav-open");
		/*
		$(".nav-link").toggleClass("animate__animated");
		$(".nav-link").toggleClass("animate__fadeInDown");

		$("nav").each(function (index) {
			$(this)
				.delay(400 * index)
				.fadeIn(300);
		});*/

		$(".nav-link").fadeIn();
		$(".nav-link").fadeIn("slow");
		$(".nav-link").fadeIn(3000);
	});
});
