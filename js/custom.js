// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// =========================================Number scroll=================================================================

$('a[href^="#"]').on("click", function(e) {
    // set scroll section navbar
    e.preventDefault();
    const el = $(this).attr("href");
    if ($(el).length > 0) {
      headerH = $('.header-scroll').outerHeight();
      const scrollTop = $(el).offset().top - headerH - 20;
      $("html, body").animate({
        scrollTop: scrollTop
      });
    }
  });
  
  $(window).scroll(function() {
    // set height section with header when scroll
    var $height = $(window).scrollTop();
    var intro = $('#introduce').outerHeight(),
      b_intr = $('.b_intro').outerHeight(),
      height_intro = intro + b_intr;
    //  -20 because set top header 90 but header = 70
    if ($height > height_intro - 20) {
      $('.menu-side').addClass('sticky');
    } else {
      $('.menu-side').removeClass('sticky');
    }
  
    //   Menu Active Class when scrolling
    var windscroll = $(window).scrollTop();
    $('.block').each(function(i) {
  
      var item1 = $(this).position().top <= windscroll - 600,
        item2 = $(this).position().top <= windscroll - 450,
        item3 = $(this).position().top <= windscroll - 350;
      if ($(window).width() >= 1700) {
        if (item1) {
          $('.navBar-action a.active').removeClass('active');
          $('.navBar-action a').eq(i).addClass('active');
        }
      }
  
      if ($(window).width() <= 1699) {
        if (item2) {
          $('.navBar-action a.active').removeClass('active');
          $('.navBar-action a').eq(i).addClass('active');
        }
      }
  
      if ($(window).width() <= 1300) {
        if (item3) {
          $('.navBar-action a.active').removeClass('active');
          $('.navBar-action a').eq(i).addClass('active');
        }
      }
  
    });
  });
  
  
  // sroll circles-wrapper
  // Deals with prefixes
  var prefix = isPrefixed.css;
  var rotate = "rotate(";
  
  // Deal with browsers that don't support 3d transforms
  if (Modernizr.csstransforms3d) {
    rotate = "rotate3d(0,0,1,";
  }
  
  $(".wrapper").each(function(j) {
    var circle = "<div class='circle circle-" + j + "'><div class='inner-circle'></div><div class='mask-left'><div class='fill'></div></div><div class='mask-right'><div class='fill'></div></div><div class='mask-full'></div></div>";
    $(".circles-wrapper").append(circle);
  });
  
  $(".circle:eq(0)").addClass("is-active");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
  
    // Calculate each progress section
    $(".wrapper").each(function(i) {
      var this_top = $(this).offset().top - 920;
      var height = $(this).height();
      var this_bottom = this_top + height;
      var percent = 0;
  
      // Scrolled within current section
      if (top >= this_top && top <= this_bottom) {
        percent = ((top - this_top) / height) * 100;
        if (percent >= 100) {
          percent = 100;
        }
      } else if (top > this_bottom) {
        percent = 100;
      }
  
      // Adds the active class
      if (percent < 100 && percent > 0) {
        if (!$(".circle:eq(" + i + ")").hasClass("is-active")) {
          $(".circle:eq(" + i + ")").toggleClass("is-active");
        };
      } else {
        $(".circle:eq(" + i + ")").removeClass("is-active");
      }
  
      // "Fills" the circles
      if (percent <= 50) {
        $(".mask-right .fill:eq(" + i + ")").css(prefix + "transform", rotate + (360 * percent / 100) + "deg)");
        $(".mask-left .fill:eq(" + i + ")").css(prefix + "transform", rotate + "0)");
      } else if (percent > 50) {
        $(".mask-left .fill:eq(" + i + ")").css(prefix + "transform", rotate + ((360 * percent / 100) - 180) * 1 + "deg)");
        $(".mask-right .fill:eq(" + i + ")").css(prefix + "transform", rotate + "180deg)");
      }
    });
    // scrol % number counter
    const updateScrollPercentage = function() {
      const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[data-scrollPercentage] .percentage")
      percentageVal = document.querySelector("#percentage-value")
  
      if (bodyHeight - contentScrolled <= heightOfWindow) {
        percentageVal.textContent = percentage.style.width = "100%"
      } else {
        const total = bodyHeight - heightOfWindow,
          got = contentScrolled,
          percent = parseInt((got / total) * 100)
        percentageVal.textContent = percentage.style.width = percent + "%"
      }
    }
    window.addEventListener('scroll', updateScrollPercentage)
    // end scrol % number counter
  });
  // =========================================end Number scroll=================================================================
