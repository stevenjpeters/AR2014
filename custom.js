//Top:
jQuery(document).ready(function($) {
	jQuery('#to_top').click(function() {
		jQuery('body,html').animate({
			scrollTop: 0
		},
		800);
	});
	
	var backtop=function(){
	Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop)>245?jQuery('#to_top').fadeIn(300):jQuery('#to_top').fadeOut(300)
	}
	$(window).load(function(){
		backtop();
	})
	$(window).scroll(function(){
		backtop();
	})
	
});

//

jQuery(document).ready(function($) {
	jQuery('.roll_menu2').click(function() {
		jQuery('body,html').animate({
			scrollTop: 0
		},
		800);
	});
	
	var backtop=function(){
	Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop)>245?jQuery('.roll_menu2').fadeIn(300):jQuery('.roll_menu2').fadeOut(300)
	}
	$(window).load(function(){
		backtop();
	})
	$(window).scroll(function(){
		backtop();
	})
	
});

//




function animationShow(e,option){
		var e=$(e),
			option=$(option);
		e.click(function() {
			var interval;	
			
			if(!e.hasClass("Open")){
				e.addClass("Open");
				option.fadeIn();
			} 
			else{
				e.removeClass("Open");
				option.fadeOut();
			}
			e.parent().mouseover(function() {
			clearTimeout(interval);
			})
			e.parent().mouseout(function() {
				interval = setInterval(function(){e.removeClass("Open");option.fadeOut();clearTimeout(interval);},1000); 
			})
		})
}
	
jQuery(document).ready(function($) {
	animationShow(".searchbut",".searchBox");
})




//For Menu Lavalamp:

jQuery(document).ready(function($) {		
	animatedcollapse.addDiv('search', 'fade=1,speed=200,group=mobile,hide=1')
	animatedcollapse.init()
});

//Mega_menu

jQuery(document).ready(function($) {		

$(".HeadPane_mobile").html($(".HeadPane .Normal").html())
})
	
	
	
$(window).load(function () {
	
//roll_menu
function roll_menu(e){
	$(e).each(function() {
		var e=$(this);
	var roll=function(e){
			var h=450;	
			//menu
			var rollsubmenu=e.find(".dnngo_boxslide");
			if($(window).scrollTop()>h){
				if(!e.parent().hasClass("roll_replace")){
					e.wrap("<div class='roll_replace'></div>");
					e.parent(".roll_replace").height(e.height());
					e.addClass("roll_activated").css({"top":-e.height(),"opacity":0}).animate({"top":0,"opacity":1},300);
				}
				//menu
				rollsubmenu.each(function() {
					
					if($(this).height()>$(window).height()-e.height()){$(this).css({"height":$(window).height()-e.height(),"overflow":"auto","marginRight":"-20px","width":$(this).parent(".dnngo_menuslide").width()+18});
					
					if(!e.parent().hasClass("submenu_box")){
					$(this).wrap("<div class='submenu_box'></div>").parent(".submenu_box").css({"overflow":"hidden"})}
					}
					
				})
			}
			else if(e.parent().hasClass("roll_replace")){
				e.unwrap();
				e.removeClass("roll_activated");
				//menu
				rollsubmenu.each(function() {
					$(this).attr("style"," ")
					if($(this).parent().hasClass("submenu_box")){
					$(this).unwrap();
					}
					
				})
			}
			
			
	   };
	   roll(e);
	   $(window).scroll(function(){roll(e)})  
    });
}

jQuery(document).ready(function($) {
	roll_menu(".roll_menu"); 
	
});




	
	/* Set CSS3 Animations via class: http://daneden.me/animate/ 
	---------------------------------------------*/
	$("#dnn_pnav li").hover(
		function () { $("ul", this).removeClass().addClass('fadeInDown'); },
		function () { $("ul", this).removeClass().addClass('fadeOutUp'); }
	);
	$("#dnn_pnav li ul li").hover(
		function () { $("ul", this).removeClass().addClass('fadeInLeft'); },
		function () { $("ul", this).removeClass().addClass('fadeOutRight'); }
	);
}); 

 //Google Map
jQuery(document).ready(function($){
	if(document.getElementById('gmap')){
		jQuery('#gmap').gMap({
			address:'Bear city, ny ',
			maptype:'hybrid',
			zoom:8,
			scrollwheel:true,
			scaleControl:true,
			navigationControl:true,
			markers:[
				{address:'Bear city, ny ',html:'marker 1'},
				{address:' 579 Allen Road Basking Ridge, NJ 07920 ',html:'marker 1'},
				{address:' Mount Arlington, NJ 07856',html:'marker 1'}
				]
		}); 
	}	
});


if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style");
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  );
  document.getElementsByTagName("head")[0].
    appendChild(msViewportStyle);
}



(function($,window,undefined) {

	var nua = navigator.userAgent;
	var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));

	function browserSize(){
			wh = $(window).height();
			ww = $(window).width();
			dh = $(document).height();
			ar = ww/wh;
	};

function init() {
    browserSize();
    if (is_android) {
        $('html').addClass('android-browser');
    } else {
        $('html').addClass('no-android-browser');
    }    
    $('html').addClass('loaded');
    eventHandlersOnce();
};

function eventHandlersOnce() {
    $('.switchOpen').on('click', function(e) {
			$(this).addClass('SwitchClose');
        var hh = $('header').height(),
            ch = $('.navigation_mobile').height(),
            max = Math.max(wh,ch,hh);
						$('.navigation_mobile').css({'minHeight':wh});

        if ($('html').hasClass('navigation_is-visible')) {
            $('#dnn_wrapper').css({'height': ''});
      			$(this).removeClass('SwitchClose');
			  } else {
            $('#dnn_wrapper').css({'height': max});
			}
     $('html').toggleClass('navigation_is-visible');


		 $('.navigation_mobile').resize(function(){
			 if ($('html').hasClass('navigation_is-visible')) {
				 $('#dnn_wrapper').css({'height':$('.navigation_mobile').height()});
	 }
				else {
            $('#dnn_wrapper').css({'height': ' '});
			}
      
		});
 
	 
	  }); 
};

$(function(){ 
	init()
});

})(jQuery, window);


//chart 
$(window).load(function() {
	"use strict";
	var e_1 = $(".percentage");
	e_1.easyPieChart({
		animate: 2000,
		barColor: e_1.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 5,
		lineCap: 'round',
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	});
	var e_2 = $(".percentage2");
	e_2.easyPieChart({
		animate: 2000,
		barColor: e_2.css('color'),
		trackColor: "#e7e7e7",
		size: 140,
		lineWidth: 16,
		scaleColor: false,
		onStep: function(e) {
			this.$el.find("span").text(~~e)
		}
	})

});



$(document).ready(function() {
	$(".carousel_1").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_2").each(function() {
		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :3,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_3").each(function() {
		$(this).owlCarousel({
		   singleItem : true,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_4").each(function() {
		$(this).owlCarousel({
		items :	$(this).attr("data-items")	   			? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		 itemsDesktop : [1550,4],
	itemsDesktopSmall : [1250,3],	  
		  itemsTablet : [930,2],
		  itemsMobile : [620,1]
		});
	})
	$(".carousel_5").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :3,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_6").each(function() {
  		$(this).owlCarousel({
				items :	$(this).attr("data-items")	    ? $(this).data("items")		  :4,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true
		});
	})
	$(".carousel_7").each(function() {
  		$(this).owlCarousel({
		items :	$(this).attr("data-items")	   			? $(this).data("items")		  :5,
		   navigation : $(this).attr("data-navigation") ? $(this).data("navigation")  :true,
		   pagination : $(this).attr("data-pagination") ? $(this).data("pagination")  :true,
			 autoPlay : $(this).attr("data-autoplay")   ? $(this).data("autoplay")    :true,
		   autoHeight : $(this).attr("data-autoheight") ? $(this).data("autoheight")  :true,
		 itemsDesktop : [1550,4],
	itemsDesktopSmall : [1250,3],	  
		  itemsTablet : [930,2],
		  itemsMobile : [620,1]
		});
	})
	
	
});


// iLightBox
$(document).ready(function() {
     $('.iLightBox_image').each(function() {
		$(this).magnificPopup({
			type: 'image',
			zoom: {
				enabled:$(this).find('img').length> 0 ?true: false,
				duration: 300, 
				opener: function(element) {
					return  element.find('img');
				}
			}
	   });
   });
    $("[class*='iLightBox_image_gallery']").each(function() {
        $("."+ $(this).attr("class")).magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
			image: {
				tError: 'could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			},
			zoom: {
				enabled:  $(this).find('img').length > 0?true: false,
				duration: 300, 
				opener: function(element) {
					return   element.find('img');
				}
			}
        })
    });
    $('.iLightBox_image_group').each(function(index, element) {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading ...',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: ' could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
			},
			zoom: {
				enabled:  $(this).find('img').length > 0?true: false,
				duration: 300, 
				opener: function(element) {
					return   element.find('img');
				}
			}
        });
    });
	$('.iLightBox_youtube, .iLightBox_vimeo, .iLightBox_gmaps').magnificPopup({
	  disableOn: 1,
	  type: 'iframe',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
	$("[class*='iLightBox_youtube_gallery'],[class*='iLightBox_vimeo_gallery'],[class*='iLightBox_gmaps_gallery']").each(function() {
        $("."+ $(this).attr("class")).magnificPopup({
			disableOn: 1,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			gallery: {
				enabled: true,
				preload: [0, 1]
			}
        })
    });
   $('.iLightBox_youtube_group, .iLightBox_vimeo_group, .iLightBox_gmaps_group').each(function(index, element) {
        $(this).magnificPopup({
            delegate: 'a',
			disableOn: 1,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			gallery: {
				enabled: true,
				preload: [0, 1]
			}
        });
    });
	
	 $('.iLightBox_youtube_gallery, .iLightBox_vimeo_gallery, .iLightBox_gmaps_gallery').each(function(index, element) {
        $(this).magnificPopup({
            delegate: 'a',
			disableOn: 1,
			type: 'iframe',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
			gallery: {
				enabled: true,
				preload: [0, 1]
			}
        });
    });
	
	
    $(".iLightBox_Box").each(function() {
       $(this).magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'iLightBox_zoom_in'
		})
	});
    $(".iLightBox_ajax").each(function() {
		$(".iLightBox_ajax").magnificPopup({
			type: 'ajax',
			alignTop: true,
			overflowY: 'scroll' 
		});
	});
	$("[class*='iLightBox_ajax_group']").each(function() {
        $("."+ $(this).attr("class")).magnificPopup({
			type: 'ajax',
			alignTop: true,
			overflowY: 'scroll',
			gallery: {
				enabled: true,
				preload: [0, 1]
			}
        })
    });
});

//source_code 
jQuery(document).ready(function($) {
	var $source=$(".source_code");
	 $source.find("a").click(
	 function(){
		   $(this).siblings("pre").css("display")=="none" ? $(this).siblings("pre").slideDown(200):$(this).siblings("pre").slideUp(200);
		   return false;
	})
})



jQuery(function() {
	jQuery(".player").mb_YTPlayer({
		onReady: function() {
			jQuery("#eventListener").append(" (Player is ready)");
		}
	}).each(function() {
		var e = $(this),
	    n = 1;
		e.children(".Play").click(function() {
			if (n == 0) {
				e.playYTP();
				$(this).addClass("pause").removeClass("plays");
				n = 1;
			} else {
				e.pauseYTP();
				$(this).addClass("plays").removeClass("pause");
				n = 0;
			}
		});
	});
});



