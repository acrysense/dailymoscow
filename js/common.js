$(document).ready(function(){

	if($(window).width() > 768)
		$(".search-wrap").customScrollbar();

	if($(window).width() <= 940 && $(window).width() > 768)
		$(".header-bottom").customScrollbar();

	$(window).resize(function(){
		if($(window).width() <= 940 && $(window).width() > 768)
			$(".header-bottom").customScrollbar();
	});

	//slider
	$('.header-list').slick({
	  infinite: false,
	  arrows: false,
	  dots: false,
	  autoplay: false,
	  speed: 100,
	  variableWidth: true,
	  swipeToSlide: true,
	  slidesToShow: 8,
	  responsive: [
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 5
      }
    }
  ]
	});

	if($(window).width() <= 940) {
		$('.header-list').slick('unslick');
	}

	$('.main-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: true,
	  nextArrow: '<button class="slick-arrow slick-next"><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 0.292893C20.3166 -0.0976311 19.6834 -0.0976311 19.2929 0.292893C18.9024 0.683417 18.9024 1.31658 19.2929 1.70711L28.5858 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H28.5858L19.2929 22.2929C18.9024 22.6834 18.9024 23.3166 19.2929 23.7071C19.6834 24.0976 20.3166 24.0976 20.7071 23.7071L31.7044 12.7098C31.7163 12.698 31.7279 12.6859 31.7392 12.6735C31.8049 12.6015 31.8582 12.5222 31.899 12.4384C31.9637 12.306 32 12.1572 32 12C32 11.7183 31.8835 11.4638 31.6961 11.282L20.7071 0.292893Z" fill="black"/></svg></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"><svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893C13.0976 0.683417 13.0976 1.31658 12.7071 1.70711L3.41421 11H31C31.5523 11 32 11.4477 32 12C32 12.5523 31.5523 13 31 13H3.41422L12.7071 22.2929C13.0976 22.6834 13.0976 23.3166 12.7071 23.7071C12.3166 24.0976 11.6834 24.0976 11.2929 23.7071L0.295574 12.7098C0.283684 12.698 0.272091 12.6859 0.260803 12.6735C0.195103 12.6015 0.141817 12.5222 0.100952 12.4384C0.0362892 12.306 0 12.1572 0 12C0 11.7183 0.116489 11.4638 0.303928 11.282L11.2929 0.292893Z" fill="black"/></svg></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  speed: 500,
	  customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return ''+ (i + 1) +'';
			},
	});
	
	$('.exclusive-materials-subs__slider').slick({
		infinite: true,
		arrows: true,
		dots: true,
		prevArrow: '<button class="slick-arrow slick-prev"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.29289 0.79271C5.68342 0.402186 6.31658 0.402186 6.70711 0.79271C7.09763 1.18323 7.09763 1.8164 6.70711 2.20692L3.41421 5.49982H11C11.5523 5.49982 12 5.94753 12 6.49982C12 7.0521 11.5523 7.49982 11 7.49982H3.41422L6.70711 10.7927C7.09763 11.1832 7.09763 11.8164 6.70711 12.2069C6.31658 12.5974 5.68342 12.5974 5.29289 12.2069L0.295574 7.20959C0.283685 7.19779 0.272089 7.1857 0.260801 7.17331C0.195101 7.1013 0.141817 7.02201 0.100952 6.93819C0.0362902 6.80582 0 6.65706 0 6.49982C0 6.2181 0.11649 5.9636 0.303929 5.78184L5.29289 0.79271Z" fill="white"/></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.70711 0.79271C6.31658 0.402186 5.68342 0.402186 5.29289 0.79271C4.90237 1.18323 4.90237 1.8164 5.29289 2.20692L8.58579 5.49982H1C0.447715 5.49982 0 5.94753 0 6.49982C0 7.0521 0.447715 7.49982 1 7.49982H8.58578L5.29289 10.7927C4.90237 11.1832 4.90237 11.8164 5.29289 12.2069C5.68342 12.5974 6.31658 12.5974 6.70711 12.2069L11.7044 7.20959C11.7163 7.19779 11.7279 7.1857 11.7392 7.17331C11.8049 7.1013 11.8582 7.02201 11.899 6.93819C11.9637 6.80582 12 6.65706 12 6.49982C12 6.2181 11.8835 5.9636 11.6961 5.78184L6.70711 0.79271Z" fill="white"/></svg></button>',
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		speed: 500,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
			}
		},
		]
	});

	if($(window).width() >= 1024) {
		$('.exclusive-materials-subs__slider').slick('unslick');
	}

	$(window).resize(function(){
		if($(window).width() <= 940)
			$('.header-list').slick('unslick');
		else
			$('.header-list').slick('refresh');

		if($(window).width() >= 1024)
			$('.exclusive-materials-subs__slider').slick('unslick');
		else
			$('.exclusive-materials-subs__slider').slick('refresh');
	});

	$('.category-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: true,
	  nextArrow: '<button class="slick-arrow slick-next"><svg width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976315 0.683417 -0.0976306 1.31658 0.292894 1.70711L14.5857 15.9999L0.292894 30.2926C-0.0976304 30.6832 -0.0976313 31.3163 0.292893 31.7069C0.683417 32.0974 1.31658 32.0974 1.70711 31.7069L16.6952 16.7188C16.6992 16.7149 16.7031 16.711 16.7071 16.7071C16.9024 16.5118 17 16.2558 17 15.9999C17 15.7439 16.9024 15.488 16.7071 15.2927C16.7031 15.2887 16.6992 15.2848 16.6952 15.281L1.70711 0.292893Z" fill="white"/></svg></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"><svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2948 0.292893C15.6854 -0.0976311 16.3185 -0.0976311 16.7091 0.292893C17.0996 0.683417 17.0996 1.31658 16.7091 1.70711L2.41629 15.9999L16.7091 30.2926C17.0996 30.6832 17.0996 31.3163 16.7091 31.7069C16.3185 32.0974 15.6854 32.0974 15.2948 31.7069L0.306747 16.7188C0.302765 16.7149 0.298807 16.711 0.294874 16.7071C0.0995884 16.5118 0.00195694 16.2558 0.00198174 15.9999C0.00195694 15.7439 0.0995884 15.488 0.294874 15.2927C0.298807 15.2887 0.302765 15.2848 0.306747 15.281L15.2948 0.292893Z" fill="white"/></svg></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  speed: 500,
	  customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
			return ''+ (i + 1) +'';
			},
	});

	$(".category-slider").on("afterChange", function(event, slick, currentSlide){
    $(".category-num").html(parseInt(slick.currentSlide + 1) + ' <span>/ ' + '<b>' + slick.slideCount + '</b></span>');
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
		$('.search').removeClass('active');
		$('html,body').toggleClass('scroll-hidden');
	});

	//search
	$('.header-search').on('click', function(){
		$('.search').toggleClass('active').find('input').focus();
		$('.header-bg').addClass('active');
		$('html,body').addClass('scroll-hidden');
	});

	$('.search-close').on('click', function(){
		$('.search').removeClass('active');
		$('.header-bg').removeClass('active');
		$('html,body').removeClass('scroll-hidden');
	});

	$('.pagination-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$('.tab-list li a').removeClass('active');
		$('.tab').removeClass('tab-active');

		var attr = $(this).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');
	});

	//donate
	$('.donate-amount .donate-radio').on('click', function(){
		if($(this).find('input').hasClass('radio-btn'))
			$(this).parents('.donate-row').find('.input-block').addClass('active');
		else
			$('.input-block').removeClass('active');
	});

	//accordeons
	$(".accordeon .accordeon-block").hide().prev().click(function() {

		if($(this).parents(".accordeon").hasClass('accordeon-active'))
			$(".accordeon").removeClass('accordeon-active');
		else {
			$(".accordeon").removeClass('accordeon-active');
			$(this).parents(".accordeon").addClass('accordeon-active');
		}

		$(this).parents().find(".accordeon-block").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});

	//rate
	$('.rate .main-btn').on('click', function(e){
		e.preventDefault();

		$('.rate-col').removeClass('active');
		$(this).parents('.rate-col').addClass('active');
	});

	//subscription
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var mail = $('.subscription-form__wrap input');
	 
	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				//$('#valid').text('Подходит');
				$('.subscription-form__wrap .main-btn').addClass('active');
				$('.subscription-form__wrap').removeClass('input-error');
				$('.subscription').addClass('active');
		}
		else{
			$('.subscription-form__wrap').addClass('input-error');
		}
		}
		else{
		 	$('.subscription-form__wrap').addClass('input-error');
		}
	});

});