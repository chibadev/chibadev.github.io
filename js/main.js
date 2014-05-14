jQuery(document).ready(function() {
    mainSlide = jQuery('#main');
    worksSlide = jQuery('#works');
    worksSlideOffset = worksSlide.offset().top;
    aboutSlide = jQuery('#about');
    aboutSlideOffset = aboutSlide.offset().left;

    jQuery(document).on('click', '.target', function() {
        target = jQuery(this).attr('target');
        
        switch (target) {
            case 'main':
                worksSlide.animate({
                    top: '100%'
                }, 750, 'easeOutCubic');
                aboutSlide.animate({
                    left: '100%'
                }, 750, 'easeOutCubic');
                break;
            case 'works':
                aboutSlide.css({'z-index': 2});
                worksSlide.css({'z-index': 3});
                if (aboutSlide.offset().left != aboutSlideOffset) {
                    aboutSlide.animate({
                        left: '100%'
                    }, 750, 'easeOutCubic', function () {
                        worksSlide.animate({top: 0}, 750, 'easeOutCubic');
                    });
                } else {
                    worksSlide.animate({
                        top: 0
                    }, 750, 'easeOutCubic');
                }
                break;
            case 'about':
                worksSlide.css({'z-index': 2});
                aboutSlide.css({'z-index': 3});
                if (worksSlide.offset().top != worksSlideOffset) {
                    worksSlide.animate({
                        top: '100%'
                    }, 600, 'easeOutCubic', function () {
                        aboutSlide.animate({left: 0}, 600, 'easeOutCubic');
                    });
                } else {
                    aboutSlide.animate({
                        left: 0
                    }, 600, 'easeOutCubic');
                }
                break;
        }
    });

    jQuery(document).on('mouseenter', '.to-works', function() {
        jQuery(this).animate({
            bottom: '145px'
        }, 250, function() {
            jQuery(this).animate({
                bottom: '140px'
            }, 100);
        });
    });

    jQuery(document).on('mouseleave', '.to-works', function() {
        jQuery(this).animate({
            bottom: '120px'
        }, 300);
    });
});