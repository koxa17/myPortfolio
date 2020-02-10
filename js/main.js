new WOW().init();


$(function(){

	var mySwiper = new Swiper ('.swiper-container', {
	   	slidesPerView: 1,
	   	spaceBetween: 0,
		  // Responsive breakpoints
		breakpoints: {
		    // when window width is >= 320px
		    320: {
		      slidesPerView: 1,
		      spaceBetween: 0
		    },
		    // when window width is >= 640px
		    640: {
		      slidesPerView: 2,
		      spaceBetween: 0
		    },
		    840: {
		      slidesPerView: 3,
		      spaceBetween: 0
		    }, 
		    1200: {
		      slidesPerView: 3,
		      spaceBetween: 50
		    },
		  },
	   	autoplay: {
		    delay: 10000,
		},
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,

	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true
	    },

	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  
 	 })
	
	$('a[href^="#"]').click(function(event){

	//объявляем переменную, в которую заносится значение href
	//например <a href="#block"></a> отсюда в переменную занесётся  значение //#block
   const id_clicked_element = $(this).attr('href');

	//определяем кординаты точки, где должен остановиться наш скролл
   const destination = $(id_clicked_element).offset().top;

	//В скрипте автора показаны условия в зависимости от браузера
	// например if ($.browser.safari) означает, что пользовательпользуется Apple и использует браузер Safari, или не на Apple, но пользуется Safari, грёбаный извращенец
	//В своём варианте я же просто выбрал разом и html и body
	//и к ним уже применил jQuery-анимацию (если не знаете, то дуйте сюда https://api.jquery.com/animate/)
   $('html, body').animate({scrollTop: destination}, 900);

	//а вот эта строчка для того, чтобы не было перезагрузки страницы и в адресную строку браузера не вносилось дополнительно значение якоря
   return false;
  });


	

});
