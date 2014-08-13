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

jQuery(window).load(function() {
    var demo1 = jQuery('.demo-1'),
        cell = demo1.find('.cell'),
        cellInterval = 0;

    cell.each(function() {
        cellInterval = cellInterval + 5;
        jQuery(this).delay(cellInterval * 10).animate({
            top: 0
        }, 1000, 'easeOutBack');
    });
});