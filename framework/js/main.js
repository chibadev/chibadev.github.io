jQuery(document).ready(function() {

    var resolutions = jQuery('.resolutions'),
        res = resolutions.find('li'),
        box = jQuery('.demo-box'),
        frame = box.find('.demo-iframe');

    res.on('click', function() {
        curRes = jQuery(this);
        
        res.each(function() {
            jQuery(this).removeClass('active');
        });

        curRes.addClass('active');
        box.animate({
            width: jQuery(this).attr('data-res')
        }, 400, function() {
            var demoSrc = frame.src;
            frame.src = '';
            frame.src = demoSrc;

            box.animate({
                height: frame.contents().find('body').height()
            }, 400);
        });
    });

});