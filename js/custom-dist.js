function getYear(){var e=(new Date).getFullYear();document.querySelector("#displayYear").innerHTML=e}function myMap(){var e={center:new google.maps.LatLng(40.712775,-74.005973),zoom:18};new google.maps.Map(document.getElementById("googleMap"),e)}getYear(),$(".client_owl-carousel").owlCarousel({loop:!0,margin:20,dots:!1,nav:!0,navText:[],autoplay:!0,autoplayHoverPause:!0,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},768:{items:2}}}),$('a[href^="#"]').on("click",(function(e){e.preventDefault();const a=$(this).attr("href");if($(a).length>0){headerH=$(".header-scroll").outerHeight();const e=$(a).offset().top-headerH-20;$("html, body").animate({scrollTop:e})}})),$(window).scroll((function(){$(window).scrollTop()>$("#introduce").outerHeight()+$(".b_intro").outerHeight()-20?$(".menu-side").addClass("sticky"):$(".menu-side").removeClass("sticky");var e=$(window).scrollTop();$(".block").each((function(a){var t=$(this).position().top<=e-600,i=$(this).position().top<=e-450,s=$(this).position().top<=e-350;$(window).width()>=1700&&t&&($(".navBar-action a.active").removeClass("active"),$(".navBar-action a").eq(a).addClass("active")),$(window).width()<=1699&&i&&($(".navBar-action a.active").removeClass("active"),$(".navBar-action a").eq(a).addClass("active")),$(window).width()<=1300&&s&&($(".navBar-action a.active").removeClass("active"),$(".navBar-action a").eq(a).addClass("active"))}))}));var prefix=isPrefixed.css,rotate="rotate(";Modernizr.csstransforms3d&&(rotate="rotate3d(0,0,1,"),$(".wrapper").each((function(e){var a="<div class='circle circle-"+e+"'><div class='inner-circle'></div><div class='mask-left'><div class='fill'></div></div><div class='mask-right'><div class='fill'></div></div><div class='mask-full'></div></div>";$(".circles-wrapper").append(a)})),$(".circle:eq(0)").addClass("is-active"),$(window).scroll((function(){var e=$(this).scrollTop();$(".wrapper").each((function(a){var t=$(this).offset().top-920,i=$(this).height(),s=t+i,r=0;e>=t&&e<=s?(r=(e-t)/i*100)>=100&&(r=100):e>s&&(r=100),r<100&&r>0?$(".circle:eq("+a+")").hasClass("is-active")||$(".circle:eq("+a+")").toggleClass("is-active"):$(".circle:eq("+a+")").removeClass("is-active"),r<=50?($(".mask-right .fill:eq("+a+")").css(prefix+"transform",rotate+360*r/100+"deg)"),$(".mask-left .fill:eq("+a+")").css(prefix+"transform",rotate+"0)")):r>50&&($(".mask-left .fill:eq("+a+")").css(prefix+"transform",rotate+1*(360*r/100-180)+"deg)"),$(".mask-right .fill:eq("+a+")").css(prefix+"transform",rotate+"180deg)"))}));window.addEventListener("scroll",(function(){const e=window.innerHeight,a=window.pageYOffset,t=document.body.offsetHeight,i=document.querySelector("[data-scrollPercentage] .percentage");if(percentageVal=document.querySelector("#percentage-value"),t-a<=e)percentageVal.textContent=i.style.width="100%";else{const s=parseInt(a/(t-e)*100);percentageVal.textContent=i.style.width=s+"%"}}))}));