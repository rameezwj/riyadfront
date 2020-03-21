(function() {
  if(jQuery(window).width() <= 767){
    /*var pass = prompt("Please enter the password");

    if (pass != 'null') {
      window.location.href = "http://google.com";
    }*/
  }
}());

// dom ready event
var navigate = '';
jQuery('document').ready(function(){

  if(jQuery(window).width() >= 767){
    jQuery('.whats_happening_wrapper, #top_events_offers_wrapper').hover(function(){
      jQuery('.custom_cursor').css('display','block')
    }, function()
    {
      jQuery('.custom_cursor').css('display','none')
    })

    jQuery('.slide_content a').hover(function(){
      jQuery('.custom_cursor').css('display','none')
    }, function()
    {
      jQuery('.custom_cursor').css('display','block')
    })

    jQuery("body").mousemove(function(e){
      var left = jQuery(window).width()/2;
      jQuery('.custom_cursor').css({
        'top': `${e.pageY-25}px`,
        'left': `${e.pageX-25}px`,
      })

      // console.log(e.pageX, e.pageY);

      if(e.pageX < left){
        jQuery('.custom_cursor').addClass('left');
        jQuery('.custom_cursor').removeClass('right');
        navigate = 'swiper-button-prev';
        // console.log('left')
      }
      else if(e.pageX > left){
        jQuery('.custom_cursor').addClass('right');
        jQuery('.custom_cursor').removeClass('left');
        navigate = 'swiper-button-next';
        // console.log('right')
      }
    });

    jQuery('body').on('click', '#whats_happening_wrapper, #top_events_offers_wrapper', function(e){
      document.getElementById(`${navigate}`).click();
    });
  }


  // shopping grid
    if(jQuery('body').hasClass('page_shopping')){
      jQuery('.grid').colcade({
        columns: '.grid-col',
        items: '.grid-item'
      })
    }
  // shopping grid

  // dine page
  if(jQuery('body').hasClass('page_events')){
    var feat_prod1_height = (jQuery('.featured_products_wrapper .inner_wrapper div:nth-child(1)').height() / 2 ) - 10; 
    jQuery('.featured_products_wrapper .inner_wrapper div:nth-child(2), .featured_products_wrapper .inner_wrapper div:nth-child(3)').css('height', feat_prod1_height+'px')
  }
  // dine page

  // mobile menu
    var mmenu_timline = new TimelineMax({ paused:true });
    
    mmenu_timline.fromTo('.mmenu_list', 1, {display: 'none', y: 0, opacity: 0}, {display: 'block', y: 0, opacity: 1, ease: Power4.easeOut})
    .staggerFromTo('.mmenu_search_within, .mmenu_list > ul > li', 1, {y: 150, opacity: 0}, {y: 0, opacity: 1, ease: Power3.easeOut}, .1, '-.1', function(){
      // jQuery('.mmenu_list, .mmenu_list > ul > li').removeAttr('style');
    })

    jQuery('.mmenu_icon, .msearch_icon').click(function(){
      // console.log('in')
    /*  TweenMax.fromTo('.mmenu_list', 1, {display: 'none', y: 250, opacity: 0}, {display: 'block', y: 0, opacity: 1, ease: Power4.easeOut})
      TweenMax.staggerFromTo('.mmenu_list > ul > li', .4, {y: 150, opacity: 0}, {y: 0, opacity: 1, ease: Power3.easeOut}, .1, 1.2)*/
      mmenu_timline.play();
    });

    jQuery('.mbtn_close_mmenu').click(function(){
      /*mmenu_timline.staggerTo('.mmenu_list > ul > li', .4, {y: -150, opacity: 0}, .1)
      .to('.mmenu_list', 1, {y: -250, opacity: 0, display: 'none', ease: Power4.easeOut}, '-=0.1', function(){
        jQuery('.mmenu_list, .mmenu_list > ul > li').removeAttr('style');
      })
      setTimeout(function(){
        jQuery('.mmenu_list, .mmenu_list > ul > li').removeAttr('style');

      }, 2000)*/
      mmenu_timline.reverse();
      // console.log('out')
    });

    jQuery('.mmenu_list > ul > li > a').click(function(){
      var handle = jQuery(this);

      jQuery(handle).parent().toggleClass('active');
      jQuery(handle).parent().find('ul').slideToggle('fast');
    });
  // mobile menu

  // stay_connect_wrapper timeline
    var controller = new ScrollMagic.Controller();
    var tl_stay_connect_wrapper = new TimelineMax(); // stay_connect_wrapper timeline

    tl_stay_connect_wrapper.staggerFromTo('.stay_connect_wrapper .scroll_anim', .7, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power1.easeOut }, .1, '0')

    var scene_stay_connect_wrapper = new ScrollMagic.Scene({
      offset: 0,
      reverse: false,
      triggerElement: '.stay_connect_wrapper',
    })
    .setTween(tl_stay_connect_wrapper).addTo(controller);
  // leasing_wrapper timeline

  // footer_wrap timeline
    var controller = new ScrollMagic.Controller();
    var tl_footer_wrap = new TimelineMax(); // footer_wrap timeline

    tl_footer_wrap.staggerFromTo('.footer_wrap .scroll_anim', .5, { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: Power1.easeOut }, .1, '0')
    .fromTo('.ft_special_offers', .7, { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: Power1.easeOut }, .1, '-=1.5')

    var scene_footer_wrap = new ScrollMagic.Scene({
      offset: '-100',
      reverse: false,
      triggerElement: '.footer_wrap',
    })
    .setTween(tl_footer_wrap).addTo(controller);
  // footer_wrap timeline

  // scroll to a div
    jQuery(".btn_leasing_inquire a, .hm_banr_btn a").click(function() {
        $('html, body').animate({
            scrollTop: $(".leasing_wrapper").offset().top
        }, 1000);
    });
  // scroll to a div
});
// dom ready event


// window resize event
jQuery(window).resize(function(){
  // dine page
  if(jQuery('body').hasClass('page_events')){
    var feat_prod1_height = (jQuery('.featured_products_wrapper .inner_wrapper div:nth-child(1)').height() / 2 ) - 10; 
    jQuery('.featured_products_wrapper .inner_wrapper div:nth-child(2), .featured_products_wrapper .inner_wrapper div:nth-child(3)').css('height', feat_prod1_height+'px')
  }
  // dine page
});
// window resize event


// window load event
jQuery(window).on('load', function(){
  jQuery('body').css({'overflow': 'auto'});
  jQuery('.loader-wrapper').addClass('loaded');

  if(jQuery('body').hasClass('homepagesx')){

    var tmenu = new TimelineMax();
    var tlogo = new TimelineMax();
    var tBanrHeading = new TimelineMax();
    tmenu.staggerFrom('.menu_wrapper, .menu_wrapper .nav > ul > li', 1, { opacity: 0, y: 20, ease: Power4.easeOut }, .1, 2, function(){
        jQuery('.menu_wrapper .nav > ul > li').removeAttr('style');
    });

    tlogo.staggerFrom('.site_logo, .swiper-pagination-bullet, .hm_banr_btn, .msite_logo, .mmenu_icon, .msearch_icon, .mbtn_req_inquiry', 1, { opacity: 0, y: -20, ease: Power4.easeOut }, .2, 3);
    
    tBanrHeading.staggerFrom('.right-opt, .hm_banner .swiper-slide .slide_para h4, .hm_banner .swiper-slide .slide_para h1', 1.5, { opacity: 0, x: -50, ease: Power4.easeOut }, .2,2)
    .from('.hm_banner .swiper-slide img', 2, { scaleY: .6, opacity: 0, y: 200, ease: Power4.easeOut }, '-=3')
  }
  else{
    var tmenu = new TimelineMax();
    var tlogo = new TimelineMax();
    var tBanrHeading = new TimelineMax();
    tmenu.staggerFrom('.menu_wrapper, .menu_wrapper .nav > ul > li', 1, { opacity: 0, y: 20, ease: Power4.easeOut }, .1, 2, function(){
        jQuery('.menu_wrapper .nav > ul > li').removeAttr('style');
    });

    tlogo.staggerFrom('.site_logo, .msite_logo, .swiper-pagination-bullet, .hm_banr_btn, .mmenu_icon, .msearch_icon, .mbtn_req_inquiry', 1, { opacity: 0, y: -20, ease: Power4.easeOut }, .2, 3);
    
    tBanrHeading.staggerFrom('.right-opt, .page_banner .swiper-slide h1', 1.5, { opacity: 0, x: -50, ease: Power4.easeOut }, .2,2)
    .from('.page_banner .swiper-slide img', 2, { scaleY: .6, opacity: 0, y: 200, ease: Power4.easeOut }, '-=3')
  }
});
// window load event