$(function() {

	//Инициализация табов
	$( "#tabs" ).tabs();


	//Для Header
	var nav = $('.header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});



	//Галерея
	baguetteBox.run('.gallery');
	$('#more').on('click', function(){
		$('.gallery-hide').slideToggle();
		$('span', this).text(function(i, text){
      return text === "Больше домиков" ? "Меньше домиков" : "Больше домиков";
    })
    $('.fa-chevron-circle-down').toggleClass('transform')
	});
	//Иницализация Слайдеров
	var swiper = new Swiper('#header-slider', {
	  paginationClickable: true,
	  nextButton: '.swiper-button-next',
	  prevButton: '.swiper-button-prev'
	});
	var swiper = new Swiper('#slider-about-us', {
	  autoplay: 3000,
	  parallax: true,
	  loop: true
	});
	var swiper = new Swiper('#slider-review', {
	  autoplay: 5000,
	  loop: true,
	  paginationClickable: true,
	  pagination: '.swiper-pagination',
	});

	//Инициализация Меню
	var slideout = new Slideout({
	  'panel': document.getElementById('panel'),
	  'menu': document.getElementById('menu'),
	  'padding': 300,
	  'tolerance': 70,
	  'side': 'right'
	});
	document.querySelector('.menu-open').addEventListener('click', function() {
	  slideout.toggle();
	});
	slideout.on('beforeopen', function() {
  	document.querySelector('.header').classList.add('fixed-open');
	});

	slideout.on('beforeclose', function() {
	  document.querySelector('.header').classList.remove('fixed-open');
	});

	function close(eve) {
	  eve.preventDefault();
	  slideout.close();
	}

	slideout
	  .on('beforeopen', function() {
	    this.panel.classList.add('panel-open');
	  })
	  .on('open', function() {
	    this.panel.addEventListener('click', close);
	  })
	  .on('beforeclose', function() {
	    this.panel.classList.remove('panel-open');
	    this.panel.removeEventListener('click', close);
	});
	$('.slideout-menu a').on('click', function(){
		 slideout.close();
	});
	//Плавный скролл к якорю
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 70}, 800);
		return false;
	});


	//Смена картинок в доме
	$('.small-image').on('click', function(){
    var image  = $(this).data('image');
    $('#big-image img').attr('src', image);
  });

});







