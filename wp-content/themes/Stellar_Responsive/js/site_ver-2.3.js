/* Main Site JavaScript/jQuery */
jQuery(document).ready(function($) {
/*
	if ($.browser.msie && $.browser.version == 10) {
  		$("html").addClass("ie10");
  		$("html").addClass("pev");
	}
*/
	//Adds placeholders for browsers that don't support them
	try{
		$('input, textarea').placeholder();
	}catch(err){}
	
	//Give tel-links 'phone_number' class 
	$('a[href^=tel]').each(function(){
		$(this).addClass('phone_number');
	});
	
	$(window).load(function(){
		$('a[href^=tel]').each(function(){
			 $(this).addClass('phone_number');
		});
	});

	setTimeout(function() {
		$("#play-box").addClass("open");	
	}, 1000);

	$("#play-box").click(function() {
		//$("#video-fade").addClass("open");
		$("#video-fade").fadeIn(250).css('display','table');
	});

	$("#video-fade").click(function() {
		$(this).fadeOut(250);
		setTimeout(function() {
			forceReloadVideo();
		}, 300);
	});

	$("#play-close").click(function() {
		$("#video-fade").fadeOut(250);
		setTimeout(function() {
			forceReloadVideo();
		}, 300);
	});

	function forceReloadVideo() {
		var hold_html = $(".video-responsive-wrap").html();
		$(".video-responsive-wrap").html("");
		$(".video-responsive-wrap").html(hold_html);
	}

	// Menu toggles
	// could be split up into a few more functions
	$("#obstetrics-btn").click(function() {
		if ($("#filler").is(":visible")) {
			$("#filler").fadeOut(250, function() {
				if (!$("#slider-nav-wrapper").hasClass("ltr")) {
					if ($("#slider-nav-wrapper").hasClass("rtl")) {
						$("#slider-nav-wrapper").removeClass("rtl");
						setTimeout(function() {
							$("#slider-nav-wrapper").removeClass("prertl");
							$("#slider-nav-wrapper").addClass("preltr");
							setTimeout(function() {
								$("#slider-nav-wrapper").addClass("ltr");
								closeGynecologyMenu();
								openObstetricsMenu();
							},25);
						},25);
					} else {
						$("#slider-nav-wrapper").addClass("preltr");
						setTimeout(function() {
							$("#slider-nav-wrapper").addClass("ltr");
							closeGynecologyMenu();
							openObstetricsMenu();
						},25);
					}
				}
			});
		} else {
			if (!$("#slider-nav-wrapper").hasClass("ltr")) {
				if ($("#slider-nav-wrapper").hasClass("rtl")) {
					$("#slider-nav-wrapper").removeClass("rtl");
					setTimeout(function() {
						$("#slider-nav-wrapper").removeClass("prertl");
						$("#slider-nav-wrapper").addClass("preltr");
						setTimeout(function() {
							$("#slider-nav-wrapper").addClass("ltr");
							closeGynecologyMenu();
							openObstetricsMenu();
						},25);
					},25);
				} else {
					$("#slider-nav-wrapper").addClass("preltr");
					setTimeout(function() {
						$("#slider-nav-wrapper").addClass("ltr");
						closeGynecologyMenu();
						openObstetricsMenu();
					},25);
				}
			}
		}
		return false;
	});

	$("#gynecology-btn").click(function() {
		if ($("#filler").is(":visible")) {
			$("#filler").fadeOut(250, function() {
				if (!$("#slider-nav-wrapper").hasClass("rtl")) {
					if ($("#slider-nav-wrapper").hasClass("ltr")) {
						$("#slider-nav-wrapper").removeClass("ltr");
						setTimeout(function() {
							$("#slider-nav-wrapper").removeClass("preltr");
							$("#slider-nav-wrapper").addClass("prertl");
							setTimeout(function() {
								$("#slider-nav-wrapper").addClass("rtl");
								closeObstetricsMenu();
								openGynecologyMenu();
							},25);
						},25);
					} else {
						$("#slider-nav-wrapper").addClass("prertl");
						setTimeout(function() {
							$("#slider-nav-wrapper").addClass("rtl");
							closeObstetricsMenu();
							openGynecologyMenu();
						},25);
					}
				}
			});
		} else {
			if (!$("#slider-nav-wrapper").hasClass("rtl")) {
				if ($("#slider-nav-wrapper").hasClass("ltr")) {
					$("#slider-nav-wrapper").removeClass("ltr");
					setTimeout(function() {
						$("#slider-nav-wrapper").removeClass("preltr");
						$("#slider-nav-wrapper").addClass("prertl");
						setTimeout(function() {
							$("#slider-nav-wrapper").addClass("rtl");
							closeObstetricsMenu();
							openGynecologyMenu();
						},25);
					},25);
				} else {
					$("#slider-nav-wrapper").addClass("prertl");
					setTimeout(function() {
						$("#slider-nav-wrapper").addClass("rtl");
						closeObstetricsMenu();
						openGynecologyMenu();
					},25);
				}
			}
		}
		return false;
	});

	function openObstetricsMenu() {
		$("#obstetrics-nav").addClass("open");
	}

	function openGynecologyMenu() {
		$("#gynecology-nav").addClass("open");
	}

	function closeObstetricsMenu() {
		$("#obstetrics-nav").removeClass("open");
	}

	function closeGynecologyMenu() {
		$("#gynecology-nav").removeClass("open");
	}


	var alreadyScrolled = false;


	// Animation controller for more dots
	setTimeout(function() {
		if (!alreadyScrolled) {
			$("#rm1").addClass("open");
			rotateDots();
		}
	}, 1500);

	function rotateDots() {

		$("#rm2").removeClass("open");
		$("#rm3").removeClass("open");
		$("#rm4").removeClass("open");


		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm2").addClass("open");
		}, 2000);

		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm3").addClass("open");
		}, 2250);

		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm4").addClass("open");
		}, 2500);

		setTimeout(function() {
			if (!alreadyScrolled) {
				$("#rm2").removeClass("open");
				$("#rm3").removeClass("open");
				$("#rm4").removeClass("open");
			}
		}, 4000);

		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm2").addClass("open");
		}, 5000);

		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm3").addClass("open");
		}, 5250);

		setTimeout(function() {
			if (!alreadyScrolled)
				$("#rm4").addClass("open");
		}, 5500);


		setTimeout(function() {
			if (!alreadyScrolled) {
				rotateDots();
			}
		}, 10000);
	}
	

	// Scroll events for more graphic
	$(window).scroll(function() {
		var pos = $(window).scrollTop();

		if (pos >= 1000) {
			$("#rm1").removeClass("open");
			$("#rm2").removeClass("open");
			$("#rm3").removeClass("open");
			$("#rm4").removeClass("open");

			alreadyScrolled = true;
		}
	});


	// Smooth scroll from hash link to id
	$('a[href^="#"]').click(function() {
		var scrolltarget = $(this.hash);
		if (scrolltarget.length) {
			$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
			return false;
			e.preventDefault();
		}
	});


	// Open search
	$("#search-link").click(function(e) {
		e.preventDefault();
		$("#search-shell").fadeIn(250);
		$("#s").focus();
		return false;
	});

	$("#s").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$(document).click(function() {
		$("#search-shell").fadeOut(250);
		$("#make-an-appointment-shell").slideUp(500);
		$(".share-icon-shell").fadeOut(250);
	});


	// Mobile menu items
	$("#mobile-menu-icon").click(function() {
		$("html").addClass("menu-open");
		$("#menu-page-lock").show();
		setTimeout(function() {
			$("#mobile-menu").addClass("open");
		}, 100);
	});

	$("#menu-page-lock").click(function() {
		setTimeout(function() {
			$("#menu-page-lock").hide();
		}, 600);
		$("html").removeClass("menu-open");
		$("#mobile-menu").removeClass("open");
	});

	$("#mobile-menu").click(function(e) {
		e.stopPropagation();
	});


	// Slide toggles for mobbile menu and blog sidebar
	$("#menu-mobile-menu li a").click(function() {
		var next = $(this).next(".sub-menu");
		if (next.length) {
			next.slideToggle();
			return false;
		}
	});

	$("#blog-sidebar ul li h3").click(function() {
		if ($(window).width() <= 800) {
			$("#blog-sidebar ul ul").slideToggle(500);
			$("#blog-sidebar ul li h3").toggleClass("show");
		}
	});

	// Print page
	$("#print-page").click(function() {
		window.print();
	});

	$("#make-an-appointment").click(function() {
		if ($(window).width() <= 1000) {
			window.location.href = "/request-an-appointment.html";
		}
		$("#make-an-appointment-shell").slideToggle(500);
		return false;
	});

	$("#make-an-appointment-shell").click(function(e) {
		e.stopPropagation();
	});

	$(".wpcf7-not-valid-tip").live("mouseover", function() {
		$(this).fadeOut(200);
	});

	$("#make-an-appointment-shell input").focus(function() {
		$(this).next(".wpcf7-not-valid-tip").fadeOut(200);
	});

	$("#share").click(function() {
		if($(".share-icon-shell").is(":visible"))
			$(".share-icon-shell").fadeOut(250);
		else
			$(".share-icon-shell").fadeIn(250);
		return false;
	});

	$(".share-icon-shell").click(function(e) {
		e.stopPropagation();
	});

	$("#make-an-appointment-shell").on("mouseleave", function() {
		if ($(".wpcf7-response-output.wpcf7-mail-sent-ok").length) {
			$("#make-an-appointment-shell").slideUp(500);
		}
	});
});