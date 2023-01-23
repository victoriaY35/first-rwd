$(function () {
  var header = $('#header')
  $('#header .gnb_wrap').on('mouseenter', function () {
    header.addClass('on');
  });
  header.on('mouseleave', function () {
    header.removeClass('on');
  });

  $('#header .bottom_util_wrap').on('mouseenter', function (){
    header.removeClass('on');
  });


  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();
      var winW = $(this).outerWidth();

      //데스크탑
      if (winW > 1260) {
        if (st > 160) {
          header.addClass('fixed');
        } else {
          header.removeClass('fixed');
        }
        //타블렛, 모바일
      } else {
        if (st > 0) {
          header.addClass('fixed');
        } else {
          header.removeClass('fixed');
        }
      }
    })
    .trigger('scroll');


// site map 열고 닫기 
$('#header .bottom_util_wrap .btn_open').on('click', function () {
  $('#header .sitemap_modal').fadeIn();
});

$('#header .sitemap_modal .btn_close, #header .pcs_sitemap_modal .btn_close_pcs').on('click', function () {
  $('#header .sitemap_modal').fadeOut();
  $('#header .pcs_sitemap_modal').fadeOut();
});


// 테블릿, 모바일 site map 열고 닫기 
$('#header .m_sitemap_modal').hide();
$('#header .bottom_util_wrap .btn_open_m').on('click', function () {
  $('#header .m_sitemap_modal').slideDown();
});

$('#header .m_sitemap_modal .btn_close_m').on('click', function () {
  $('#header .m_sitemap_modal').slideUp();
  $('#header .sitemap_modal').hide();
});

//모바일 depth02 아코디언메뉴
$('#header .m_sitemap_modal .m_sitemap>li>a').on('click', function (e) {
  e.preventDefault();
  if(!$(this).next().is(':visible')) {
    $(this).parent().addClass('on').siblings().removeClass('on');
    $(this).next().slideDown().parent().siblings().find('.depth02').slideUp();
  } else {
    $(this).parent().removeClass('on');
    $(this).next().slideUp();
  }
});

//랭귀지 버튼 
$('#header .bottom_util_wrap .btn_lang').on('mouseenter', function () {
  $('#header .bottom_util_wrap .btn_en').slideDown();
});

$('#header .bottom_util_wrap .btn_en').on('mouseleave', function() {
  $('#header .bottom_util_wrap .btn_en').slideUp();
});

// 메인 비주얼 슬라이더 
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    simulateTouch: false,
    slidesPerView: 1, 

    effect: 'fade',
    fadeEffect: {
    crossFade: true
    },

    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      type : 'bullets',
    }
  });

    // 메인 텍스트 애니메이션
    $('[class*=animate_fade]').each(function () {
      var _this = $(this);
  
      $(window)
        .on('scroll', function () {
          var posY = _this.offset().top;
          var ani = $(this).scrollTop();
  
          if (ani >= posY - $(this).outerHeight() + 100) {
            _this.addClass('on');
          } else {
            _this.removeClass('on');
          }
        })
        .trigger('scroll');
    });

    // story 슬라이더
    var storySlider = new Swiper('.story_slider', {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 70,
      
    });

     // 모바일 story 슬라이더
    var mstorySlider = new Swiper('.m_story_slider', {
      loop: true,
      slidesPerView: 1.4,
      spaceBetween: 50,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
    
      pagination: {
        el: '.pagination_wrap .swiper-pagination',

      },
    });

    // Exhibition 왼쪽 슬라이더
  var exhibitionSlider = new Swiper('.exhibition_slider', {
    loop: true,
    simulateTouch: true,
    slidesPerView: 2, 
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // 1200이하
      1200: {
        spaceBetween: 40,
        slidesPerView: 2,
      },
      // 767이하
      767: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
    },
  });

   // 모바일 release 슬라이더
  var mreleaseSlider = new Swiper('.mrelease_slider', {
    loop: true,
    simulateTouch: true,
    slidesPerView: 1, 
    spaceBetween: 60,
    centeredSlides:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 //개인정보처리방침 열고 닫기 

$('#footer .contact_right .policy_modal').hide();

$('#footer .inquiry_bottom .checkbox_wrap .agree_list, #footer .policy .agree_list').on('click', function(e) {
  e.preventDefault();
  $('#footer .contact_right .policy_modal').fadeIn();
})
$('footer .policy_modal .btn_close_policy').on('click', function (e) {
  e.preventDefault();
  $('#footer .policy_modal').fadeOut();
})


  //패밀리 사이트 열고 닫기 
  $('#footer .btn_wrap .btn_up').on('click', function () {
    $('#footer .bottom_right .family_site').slideDown();
  })
  $('#footer .bottom_right .family_site').on('mouseleave', function () {
    $('#footer .bottom_right .family_site').slideUp();
  })

  // 탑버튼 애니메니션
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st >= 50) {
        $('#footer .top_wrap').fadeIn();
      } else {
        $('#footer .top_wrap').fadeOut();
      }
    })
    .trigger('scroll');

  $('#footer .top_wrap').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 800);
  });
});
