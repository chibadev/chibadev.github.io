function demoBoxresize(frame, box, curRes) {
    var demoSrc = frame.src;
    frame.src = '';
    frame.src = demoSrc;

    box.animate({
        width: curRes.attr('data-res')
    }, 400, function() {
        box.animate({
            height: frame.contents().find('html').height() - 30
        }, 400);
    });
}

jQuery(document).ready(function() {

    var resolutions = jQuery('.resolutions'),
        res = resolutions.find('li'),
        box = jQuery('.demo-box'),
        frame = box.find('.demo-iframe');

    res.on('click', function() {
        curRes = jQuery(this);
        
        curRes.siblings('li').removeClass('active');

        if (!curRes.hasClass('active')) {
            demoBoxresize(frame, box, curRes);
        }

        curRes.addClass('active');
    });

});