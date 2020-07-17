/** header jquery effect */

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()<50){
            $("header").removeClass("top_navbar_header");
            $(".menu-search").css("color", "white")
			$(".search i").css("color", "white")
			$(".eduka").attr("src","img/eduka.png");
			$(".logo").attr("src","img/logo1.png");
			$(".aefe").attr("src","img/logo3.png");
			$(".logo").css("border-right", "1px solid #d8dde3")
            $(".bar1").css("background-color", "white")
            $(".bar2").css("background-color", "white")
            $(".bar3").css("background-color", "white")
            
		}else{
			
            $("header").addClass("top_navbar_header");
            $(".menu-search").css("color", "#0c2948")
			$(".search i").css("color", "#0c2948")
			$(".eduka").attr("src","img/eduka2.png");
			$(".logo").attr("src","img/logo2.png");
			$(".aefe").attr("src","img/logo4.png");
			$(".logo").css("border-right", "1px solid black")
            $(".bar1").css("background-color", "#0c2948")
            $(".bar2").css("background-color", "#0c2948")
            $(".bar3").css("background-color", "#0c2948")
			
		}
	});
});


 /* home carousel*/

 $(function(){
	$('#our_school').owlCarousel({
	  loop:true,
	  margin:20,
	  responsiveClass:true,nav:true,dots:true,autoplay:true,
	  responsive:{
		  0:{
			  items:1,dots:true,
			 
		  },
		  600:{
			  items:1,dots:true,
			 
		  },
		  1000:{
			  items:1,dots:true,
			  
			  
		  }
	  }
  })
  });
  


  /** menu */
(function (document, window, $) {
    var appsFunctions = function () {
        this.menu = function () {
            $(document).find('.navbar-toggler').on('click', function (e) {
                e.preventDefault();
                $(document).find('.main-menu-content').toggleClass('show');
            });

            $(document).find('.nav-link').on('click', function (e) {
                e.preventDefault();
                $(document).find('.menu-block').toggleClass('show');
            });

        
        };
        this.silder = function () {
            if ($(document).find('.events-slider').length > 0) {
                var swiperEvents = new Swiper('.events-slider', {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 2500,
                    },
                    navigation: {
                        nextEl: '.events-next',
                        prevEl: '.events-prev',
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            direction: 'vertical',
                            navigation: false,
                            centeredSlides: false,
                            spaceBetween: 0,
                        },
                    }
                });
            }
            if ($(document).find('.actual-slider').length > 0) {
                var silder = $(document).find('.actual-slider');
                var swiperNews = new Swiper(".actual-slider", {
                    slidesPerView: "auto",
                    loop: true,
					spaceBetween: 30,
            		parallax:true,
					observer: true, 
					observeParents: true,	
                    centeredSlides: true,
                    loopFillGroupWithBlank: true,
                    noSwiping: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on: {
                        init: function () {
                            silder.find('.swiper-slide').removeClass('selected-slide');
                            silder.find('.swiper-slide').eq(this.activeIndex).addClass('selected-slide');
                        },
                        slideChange: function () {
                            silder.find('.swiper-slide').removeClass('selected-slide');
                            silder.find('.swiper-slide').eq(this.activeIndex).addClass('selected-slide');
                        },
                    },
                });
                silder.find(".item-description").on({
                    mouseenter: function () {
                        silder.find('.swiper-slide').removeClass('selected-slide');
                        $(this).parents('.swiper-slide').addClass('selected-slide');
                        
                        
                    },
                    mouseleave: function () {
                        $(this).parents('.swiper-slide').removeClass('selected-slide');
                        $(this).parents('.swiper-wrapper').find('.swiper-slide-active').addClass('selected-slide');
                       
                        
                    }
                });
                silder.hover(function () {
                    swiperNews.autoplay.stop();
                }, function () {
                    swiperNews.autoplay.start();
                });
            }
        

         

        };
    
       
        this.searchform = function () {
            $(document).find("a.a_search").on('click', function (e) {
                e.preventDefault();
                $('.block-search').slideDown();
            });

            $(document).find('.block-search .close-search').on('click', function (e) {
                e.preventDefault();
                $('.block-search').slideUp();
            });

        };
    
        return {
            init: function () {
                self.menu();
                self.silder();
                self.searchform();
         
            }
        };
    }();
    $(document).ready(function () {
        appsFunctions.init();

    });
   
})
(document, window, jQuery);