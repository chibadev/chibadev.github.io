var $body = jQuery('.slider'),
    $content = $body.find('.slider-content'),
    $slide = $content.find('li'),
    $img = $slide.find('img'),
    $txt = $slide.find('div'),
    l = $slide.length;

var timerSpeed = 3000,
    animationSpeed = 400,
    interval, prevNum, nextNum, curNum;

function init() {
    $body.append('<ul class="slider-nav"></ul>');

    var $nav = $body.find('.slider-nav');

    for (var i = 1; i <= l; i++) {
        if (jQuery('.slider-content [slide-num="' + i + '"]').hasClass('active')) {
            active = ' class="active"';
        } else {
            active = '';
        }
        $nav.append('<li slide-num="' + i + '" ' + active + '></li>');
    }

    $txt.each(function() {
        txtW = jQuery(this).width();
        txtH = jQuery(this).height();

        jQuery(this).css({
            top: $content.height() / 2 - txtH / 2,
            left: $content.width() / 2 - txtW / 2
        });
    });

    $nav.css({
        left: ($body.width() / 2) - ($nav.width() / 2)
    });
}

function rotation(num) {
    return function() {
        curNum = parseInt(jQuery('.slider-content .active').attr('slide-num'));

        prevNum = curNum - 1;
        if (curNum == 1) prevNum = l;

        if (num) {
            nextNum = num;
        } else {
            nextNum = curNum + 1;        
            if (curNum == l) nextNum = 1;
        }

        var curSlide  = '.slider-content [slide-num="' + curNum + '"]',
            curNav    = '.slider-nav [slide-num="' + curNum + '"]';

        var nextSlide = '.slider-content [slide-num="' + nextNum + '"]',
            nextNav   = '.slider-nav [slide-num="' + nextNum + '"]';

        /*jQuery(curSlide).animate({
            opacity: 0
        }, animationSpeed, function() {
            jQuery(curSlide).css('display', 'none');
            jQuery(curSlide).removeClass('active');
            jQuery(nextSlide).css('display', 'block');
            jQuery(nextSlide).animate({
                opacity: 1
            }, animationSpeed, function() {
                jQuery(nextSlide).addClass('active');
            });
        });*/

        /*jQuery(curSlide).animate({
            opacity: 0
        }, animationSpeed, function() {
            // jQuery(curSlide).css('display', 'none');
            jQuery(curSlide).removeClass('active');
        });

        // jQuery(nextSlide).css('display', 'block');
        jQuery(nextSlide).animate({
            opacity: 1
        }, animationSpeed, function() {
            jQuery(nextSlide).addClass('active');
        });*/

        // jQuery('.slider-output').append(nextSlide + ' ');

        // jQuery(curSlide).fadeOut();
        jQuery(curSlide).removeClass('active');
        
        // jQuery(nextSlide).fadeIn();
        jQuery(nextSlide).addClass('active');

        jQuery(curNav).removeClass('active');
        jQuery(nextNav).addClass('active');
    }
}

function clear() {
    return function() {
        clearInterval(interval);
    }
}

function slide() {
    return function() {
        clear()();
        interval = setInterval(rotation(), timerSpeed);
    }
}

jQuery(window).load(function() {
    init();
});

jQuery(document).ready(function() {
    slide()();
});

jQuery(document).on('click', '.slider-nav li', function() {
    var num = parseInt(jQuery(this).attr('slide-num'));

    rotation(num)();
    slide()();
});

