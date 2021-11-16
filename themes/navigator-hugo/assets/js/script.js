/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on("load", function () {
	$('#preloader').fadeOut('slow', function () {
		$(this).remove();
	});
});

(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	$('.play-icon i').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */
	setTimeout(function () {
		var filterizd = $('.filtr-container').filterizr({});
		//Active changer
		$('.filtr-control').on('click', function () {
			$('.filtr-control').removeClass("active");
			$(this).addClass("active");
		});
	}, 500);

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the slider
	$('.testimonial-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});


	/* ========================================================================= */
	/*	Clients Slider Carousel
	/* =========================================================================  */

	//Init the slider
	$('.clients-logo-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	});




	/* ========================================================================= */
	/*	Company Slider Carousel
	/* =========================================================================  */
	$('.company-gallery').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
	});


	/* ========================================================================= */
	/*	Awars Counter Js
	/* =========================================================================  */
	$('.counter').each(function () {
		var $this = $(this),
			countTo = $this.attr('data-count');

		$({
			countNum: $this.text()
		}).animate({
			countNum: countTo
		},

			{
				duration: 1500,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});
	});




	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-form').ready(function () {


		//validate name
		$('#namecheck').hide();

		$('#name').keyup(function () {
			validateName();
		})

		function validateName() {
			let nameValue = $('#name').val();
			if (nameValue.length == '') {
				$('#namecheck').show();
				nameError = true;

				return false;
			}
			else {
				$('#namecheck').hide();
				nameError = false;

			}
		}

		//validate messages
		$('#textcheck').hide();

		$('#message').keyup(function () {
			validateMessage();
		})

		function validateMessage() {
			let messageValue = $('#message').val();
			if (messageValue.length == '') {
				$('#textcheck').show();
				messageError = true;

				return false
			}
			else {
				$('#textcheck').hide();
				messageError = false;

			}
		}


		$('#emailvalid').hide();

		$('#email').keyup(function () {
			validateEmail()
		})

		function validateEmail() {
			let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
			let s = email.value;
			if (regex.test(s)) {
				$('#emailvalid').hide();
				emailError = false;

			}
			else {
				$('#emailvalid').show();
				emailError = true;

			}

		}
	})


	/*
		$('#contact-submit').click(function (e) {
	
			const firebaseConfig = {
				apiKey: "AIzaSyA6cgemqckNsnfuCqZ1XY22AaLStTuS7rU",
				authDomain: "language-shop-25351.firebaseapp.com",
				projectId: "language-shop-25351",
				storageBucket: "language-shop-25351.appspot.com",
				messagingSenderId: "232480020898",
				appId: "1:232480020898:web:7644b0d8fe7e749b953afb",
				measurementId: "G-FSZ5GF166X"
			};
	
			var push_to_firebase = function (data) {
				const app = firebase.initializeApp(firebaseConfig);
				//const analytics = getAnalytics(app);
	
				//alert("Thanks for sending a message. I'll try and get back to you as soon as possible.")
				var db = firebase.firestore();
	
				db.collection("messages").add({
					name: data["name"],
					email: data["email"],
					subject: data["sbj"],
					message: data["msg"],
					timestamp: Date.now()
				})
					.then(function (docRef) {
						console.log("Message sent, ID: ", docRef.id);
					})
					.catch(function (err) {
						console.error("Message could not sent: ", error);
						alert("Sorry, don't know what happened. Try later :(")
	
					});
			}
	
			var contact_submit = function () {
				var name = document.getElementById("name");
				var email = document.getElementById("email");
				var sbj = document.getElementById("subject")
				var msg = document.getElementById("message");
	
				var data = {
					"name": name.value,
					"email": email.value,
					"sbj": sbj.value,
					"msg": msg.value
				}
				console.log(data);
				push_to_firebase(data);
			}
	
			if ((emailError == false) && (nameError == false) && (messageError == false)) {
				contact_submit();
			}
	
		})
	 */
	/* $('#contact-submit').click(function (e) {

		//stop the form from being submitted
		//e.preventDefault();


		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		if (name.length == 0) {
			
			$('#name').css("border-color", "#D8000C");
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			
			$('#email').css("border-color", "#D8000C");
		} else {
			$('#email').css("border-color", "#666");
		}

		let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
		let s = email.value;

		if (regex.test(s)) {
			$('#emailvalid').hide();
			emailError = false;
		}
		else {
			$('#emailvalid').show();
			emailError = true;
		}

		if (subject.length == 0) {
			
			$('#subject').css("border-color", "#D8000C");
		} else {
			$('#subject').css("border-color", "#666");
		}
		
		if (message.length == 0) {
			
			$('#message').css("border-color", "#D8000C");
		} else {
			$('#message').css("border-color", "#666");
		}

		if ((nameError == false) && (emailError == false) && (messageError == false)) {
			console.log(nameError, emailError, messageError);
			push_to_firebase(data);
		}
		
	}); */

})(jQuery);



window.marker = null;

function initialize() {
	var map;

	var latitude = $('#map').data('lat');
	var longitude = $('#map').data('long');
	var nottingham = new google.maps.LatLng(latitude, longitude);

	var style = [{
		"stylers": [{
			"hue": "#ff61a6"
		}, {
			"visibility": "on"
		}, {
			"invert_lightness": true
		}, {
			"saturation": 40
		}, {
			"lightness": 10
		}]
	}];

	var mapOptions = {
		// SET THE CENTER
		center: nottingham,

		// SET THE MAP STYLE & ZOOM LEVEL
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 9,

		// SET THE BACKGROUND COLOUR
		backgroundColor: "#000",

		// REMOVE ALL THE CONTROLS EXCEPT ZOOM
		zoom: 17,
		panControl: false,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE
		}

	}
	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// SET THE MAP TYPE
	var mapType = new google.maps.StyledMapType(style, {
		name: "Grayscale"
	});
	map.mapTypes.set('grey', mapType);
	map.setMapTypeId('grey');

	//CREATE A CUSTOM PIN ICON
	var marker_image = $('#map').data('marker');
	var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(25, 33));

	marker = new google.maps.Marker({
		position: nottingham,
		map: map,
		icon: pinIcon,
		title: 'navigator'
	});
}

var map = $('#map');
if (map.length != 0) {
	google.maps.event.addDomListener(window, 'load', initialize);
}