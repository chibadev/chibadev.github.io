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

    var box = jQuery('.demo-box');

    if (e.demo.hasClass('hidden')) {
        if (e.windowWidth >= 960) {
            curRes = 960;
        } else if (e.windowWidth < 960 && e.windowWidth >= 768) {
            curRes = 768;
        } else if (e.windowWidth < 768 && e.windowWidth >= 640) {
            curRes = 640;
        } else if (e.windowWidth < 640 && e.windowWidth >= 480) {
            curRes = 480;
        }

        demoBoxResize(box, curRes);

        /*var res = jQuery('.resolutions').find('li');

        res.each(function() {
            if (jQuery(this).attr('data-res') == winWidth) {
                jQuery(this).addClass('active');
            }
        });*/
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

function demoBoxResize(box, curRes) {
    var windowWidth = jQuery(window).width(),
        boxHeight;

    if (windowWidth <= 960) {
        box.css('width', '100%');
    }

    var arrCells = {
        1: {
            elem: box.find('.cell-1'),
            width: '16.66666666666667%'
        },
        2: {
            elem: box.find('.cell-2'),
            width: '66.66666666666667%'
        },
        3: {
            elem: box.find('.cell-3'),
            width: '16.66666666666667%'
        },
        4: {
            elem: box.find('.cell-4'),
            width: '100%'
        },
        5: {
            elem: box.find('.cell-5'),
            width: '33.33333333333333%'
        },
        6: {
            elem: box.find('.cell-6'),
            width: '33.33333333333333%'
        },
        7: {
            elem: box.find('.cell-7'),
            width: '33.33333333333333%'
        }
    }

    switch(curRes) {
        case '480':
            boxHeight = 400;
            arrCells[1].width = '100%';
            arrCells[2].width = '100%';
            arrCells[3].width = '100%';
            arrCells[4].width = '100%';
            arrCells[5].width = '100%';
            arrCells[6].width = '100%';
            arrCells[7].width = '100%';
            break;
        case '640':
            boxHeight = 400;
            arrCells[1].width = '100%';
            arrCells[2].width = '100%';
            arrCells[3].width = '100%';
            arrCells[4].width = '100%';
            arrCells[5].width = '100%';
            arrCells[6].width = '100%';
            arrCells[7].width = '100%';
            break;
        case '768':
            boxHeight = 290;
            arrCells[1].width = '50%';
            arrCells[2].width = '50%';
            arrCells[3].width = '100%';
            arrCells[4].width = '100%';
            arrCells[5].width = '50%';
            arrCells[6].width = '50%';
            arrCells[7].width = '100%';
            break;
        case '960':
            boxHeight = 180;
            arrCells[1].width = '16.66666666666667%';
            arrCells[2].width = '66.66666666666667%';
            arrCells[3].width = '16.66666666666667%';
            arrCells[4].width = '100%';
            arrCells[5].width = '33.33333333333333%';
            arrCells[6].width = '33.33333333333333%';
            arrCells[7].width = '33.33333333333333%';
            break;
    }

    jQuery.each(arrCells, function(key, cell) {
        cell.elem.animate({
            width: cell.width
        }, 300);
    });

    if (windowWidth >= 960) {
        box.animate({
            width: curRes,
            height: boxHeight
        }, 600);
    } else {
        box.animate({
            height: boxHeight
        }, 600);
    }
    
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
        box = jQuery('.demo-box');

    var btnTry = jQuery('.btn-try'),
        btnDocs = jQuery('.btn-docs'),
        btnDl = jQuery('.btn-dl');

    res.on('click', function() {
        curRes = jQuery(this);
        
        curRes.siblings('li').removeClass('active');

        if (!curRes.hasClass('active')) {
            demoBoxResize(box, curRes.attr('data-res'));
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