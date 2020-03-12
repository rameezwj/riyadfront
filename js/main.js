(function() {
  console.log('sd')
}());

jQuery(function($) {

    "use strict";
    var lastScrollCheck = 1;
    var lastScrollCheckDesktop = 1;
    var top_bk = 0;

    var win = $(window)
            , target = $('body')
            , wrapper = target.find('div#scroll-containerx')
            , easing = "ease-out" //css easing
            , duration = ".9s" //duration ms(millisecond) or s(second)
            , top = 0
            , resizeTimeout
            , jmScroll = {
                _init: function() {
                    if( wrapper.length == 1 ) {
                        target.css({
                            margin: '0',
                            padding: '0',
                            width: '100%',
                            height: wrapper.height() + 'px'
                        });
                        
                        wrapper.css({
                            transition: 'transform ' + duration + ' ' + easing,
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            padding: '0',
                            zIndex: '2',
                            display: 'block',
                            backfaceVisibility: 'hidden'
                        });

                        jmScroll._reFlow(function() {
                            jmScroll._scroll();
                        });
                    }
                },

                _scroll: function() {
                    top = win.scrollTop();
                    // console.log(top);
                    
                    // fixed header on scroll
                        if(top > 100)
                            jQuery('.fixed_header').css('top', '0');
                        else
                            jQuery('.fixed_header').css('top', '-100px');
                    // fixed header on scroll

                    // for background movement within device | at workdetail page
                        if(jQuery('.ccontainer').hasClass('page-work_detail'))
                        {

                            if(top > ( (jQuery('.mobile_wrap').offset().top - 450)) && top < ( (jQuery('.mobile_wrap').offset().top + 250)) && top > lastScrollCheck)
                            {
                                jQuery('.mobile_bk_scroll').css('top', '-600px');
                                // jQuery('.mobile_bk_scroll').css('top', (top_bk-=3)+'px');
                                //console.log(jQuery(top+'---'+jQuery('.mobile_wrap').offset().top));
                            }
                            else if(top > ( (jQuery('.mobile_wrap').offset().top - 250)) && top < ( (jQuery('.mobile_wrap').offset().top + 250)))
                            {
                                jQuery('.mobile_bk_scroll').css('top', '0');
                                // jQuery('.mobile_bk_scroll').css('top', (top_bk+=3)+'px');
                            }


                            lastScrollCheck = top;
                        }

                        // for desktop image
                        if(jQuery('.ccontainer').hasClass('page-work_detail'))
                        {
                            if(top > (jQuery('.wd_row1').offset().top - 600) && top < 1700)
                            {

                                if(top > lastScrollCheckDesktop)
                                {
                                    jQuery('.fixed_imac_mask').css('top', '-6000px');
                                    console.log('down');
                                }
                                else
                                {
                                    jQuery('.fixed_imac_mask').css('top', '0');
                                    console.log('up');
                                }
                                
                                jQuery('.fixed_imac').addClass('show_imac');
                            }
                            else{
                                jQuery('.fixed_imac').removeClass('show_imac');
                            }
                         
                            lastScrollCheckDesktop = top;
                        }
                        // for desktop image
                    // for background movement within device | at workdetail page

                    if(jQuery('.ccontainer').hasClass('page-agency'))
                        jQuery('.row2bk2 div').css('transform', 'translateY(-' + (top * (.3)) + 'px)');
                    
                    if(jQuery('.ccontainer').hasClass('page-work_detail'))
                        jQuery('.wd_big_img').css('transform', 'translateY(-' + (top * (.09)) + 'px)');
                    
                    wrapper.css('transform', 'translateY(-' + top + 'px)');
                },

                _reFlow: function(callback) {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(function() {
                        target.height(wrapper.height());

                        var getType = {};
                        var isCallback = callback && getType.toString.call(callback) === '[object Function]';

                        if(isCallback) {
                            callback();
                        }
                    }, 200);
                }
            };

    if (typeof window.ontouchstart == 'undefined') {
        win.on({
            scroll: function () {
                jmScroll._scroll();
            }
            , resize: function() {
                jmScroll._reFlow();
            }
            , load: function() {
                jmScroll._init();
            }
        });
    }
});