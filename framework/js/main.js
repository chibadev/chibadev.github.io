function init() {
    var e = {};

    e = {
        bar: jQuery('.bar'),
        name: jQuery('.name'),
        nameTwin: jQuery('.name-twin'),
        description: jQuery('.description'),
        header: jQuery('.header'),
        item: jQuery('.item'),
        demo: jQuery('.content-demo'),
        docs: jQuery('.content-docs'),
        sectionMainBot: jQuery('.main-bot'),
        windowWidth: jQuery(window).width(),
        windowHeight: jQuery(window).height(),
        interval: 0
    }

    return e;
}

function start() {
    var e = init();

    var barInner = e.bar.find('.box'),
        barHeight = e.windowHeight * 0.35,
        barTop = (e.windowHeight - barHeight) / 2.5;

    e.header.css('height', barTop);
    e.bar.css('padding-top', (barHeight - barInner.height()) / 2 + 'px');
    e.nameTwin.css('top', '-' + ((barHeight - barInner.height()) / 2 + barTop) + 'px');
    e.sectionMainBot.css({
        top: barTop + barHeight,
        height: e.windowHeight - barTop - barHeight
    });

    var box = jQuery('.demo-box'),
        frame = box.find('.demo-iframe');

    if (e.demo.hasClass('hidden')) {
        if (e.windowWidth >= 960) {
            winWidth = 960;
        } else if (e.windowWidth < 960 && e.windowWidth >= 768) {
            winWidth = 768;
        } else if (e.windowWidth < 768 && e.windowWidth >= 640) {
            winWidth = 640;
        } else if (e.windowWidth < 640 && e.windowWidth >= 480) {
            winWidth = 480;
        }

        demoBoxResize(frame, box, winWidth);

        var res = jQuery('.resolutions').find('li');

        res.each(function() {
            if (jQuery(this).attr('data-res') == winWidth) {
                jQuery(this).addClass('active');
            }
        });
    }

    e.bar.animate({
        top: barTop,
        height: barHeight
    }, 800, 'easeOutCirc', function() {
        e.name.animate({
            opacity: 1
        }, 400);
        e.description.animate({
            left: 0,
            opacity: 1
        }, 400);

        e.item.each(function() {
            jQuery(this).delay(e.interval * 30).animate({
                left: 0,
                opacity: 1
            }, 400);
            e.interval = e.interval + 5;
        });
        e.sectionMainBot.find('p').each(function() {
            jQuery(this).delay(e.interval * 50).animate({
                top: 0,
                opacity: 1
            }, 400);
            e.interval = e.interval + 5;
        });
    });


}

function demoBoxResize(frame, box, curRes) {
    var demoSrc = frame.src;
    frame.src = '';
    frame.src = demoSrc;
    var boxHeight;

    box.animate({
        width: curRes
    }, 800, function() {
        switch(curRes) {
            case '480':
                boxHeight = 400;
                break;
            case '540':
                boxHeight = 400;
                break;
            case '640':
                boxHeight = 400;
                break;
            case '720':
                boxHeight = 290;
                break;
            case '768':
                boxHeight = 290;
                break;
            case '800':
                boxHeight = 290;
                break;
            case '960':
                boxHeight = 180;
                break;
        }
        box.animate({
            height: boxHeight
        }, 800);
    });
}

function letsTry() {
    var e = init(),
        barInner = e.bar.find('.box');

    e.bar.animate({
        top: 0,
        paddingTop: 30,
        height: 180
    }, 500, 'easeOutCirc', function() {
        jQuery(this).addClass('pinned');
    });

    e.description.animate({
        top: 70
    }, 500, 'easeOutCirc');

    e.nameTwin.css('display', 'block');
    e.nameTwin.animate({
        top: -15
    }, 500, 'easeOutCirc');

    e.sectionMainBot.animate({
        top: 100,
        opacity: 0
    }, 400, 'easeOutCirc', function() {
        jQuery(this).addClass('hidden');
        jQuery(this).css('display', 'none');
        e.demo.css('display', 'block');
        e.demo.animate({
            top: e.bar.height() + 60,
            opacity: 1
        }, 400, 'easeOutCirc', function() {
            jQuery(this).removeClass('hidden');
            jQuery('body').css('overflow', 'auto');
        });
    });
}

jQuery(document).ready(function() {

    var resolutions = jQuery('.resolutions'),
        res = resolutions.find('li'),
        box = jQuery('.demo-box'),
        frame = box.find('.demo-iframe');

    var btnTry = jQuery('.btn-try'),
        btnDocs = jQuery('.btn-docs'),
        btnDl = jQuery('.btn-dl');

    res.on('click', function() {
        curRes = jQuery(this);
        
        curRes.siblings('li').removeClass('active');

        if (!curRes.hasClass('active')) {
            demoBoxResize(frame, box, curRes.attr('data-res'));
        }

        curRes.addClass('active');
    });

    btnTry.on('click', function(event) {
        letsTry();
        return false;
    });

});

jQuery(window).load(function() {
    start();
});