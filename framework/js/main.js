function demoBoxResize() {
    
}

jQuery(document).ready(function() {

    var resolutions = jQuery('.resolutions'),
        res = resolutions.find('li'),
        box = jQuery('.demo-box');

    res.on('click', function() {
        curRes = jQuery(this);
        
        res.each(function() {
            // if (!curRes) {
                jQuery(this).removeClass('active');
            // }
        });

        curRes.addClass('active');
        box.animate({
            width: jQuery(this).attr('data-res')
        }, 400);
    });

    /*jQuery(document).on('mousedown', '.grab-me', function(event) {
        var grabMe = jQuery(this),
            wrap = grabMe.siblings('.demo-wrap'),
            box = grabMe.parent('.demo-box'),
            start = event.pageX,
            cur, diff,
            wrapWidth = wrap.width(),
            grabMeX = parseInt(grabMe.css('right')),
            proceed;

        proceed = true;

        console.log(proceed);
        console.log(wrapWidth);

        box.on('mousemove', function(event) {
            if (proceed) {
                cur = event.pageX;
                diff = cur - start;

                wrap.width(wrapWidth + diff);
                grabMe.css('right', grabMeX - diff + 'px');
            }
        });

        box.on('mouseleave', function() {
            proceed = false;
            console.log(proceed);
        });

        jQuery(document).on('mouseup', function() {
            proceed = false;
            console.log(proceed);
        });

        return false;
    });*/

});