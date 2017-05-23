$(function () {

    $.easing.jswing = $.easing.swing;
    $.extend($.easing,
        {
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                return $.easing[$.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c*(t/=d)*t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            }
        });

    var $messagingInput = $('.messaging__input'),
        $messagingNew = $('.messaging__new'),
        $messagingSend = $('.messaging__send'),
        $messagingMessages = $('.messaging__messages');
        $messaging = $('.messaging');


    $('.property__details-button--show').click(function () {
        $(this).fadeOut();
        $('.property__animation-container').slideDown();
    });
    $('.property__details-button--hide').click(function () {
        $('.property__animation-container').slideUp();
        $('.property__details-button--show').show();
    });

    $('.messaging__tip').click(function () {
        $('.messaging__options').toggleClass('visible');
    });

    $messagingInput.focus(function () {
        $messagingNew.addClass('messaging__new--expanded');
        setTimeout(function () {
            $messagingMessages.scrollTop($messagingMessages[0].scrollHeight);
        }, 1500)
    });

    $messagingInput.blur(function () {
        if (!$(this)[0].value) {
            $messagingNew.removeClass('messaging__new--expanded');
        }
    });

    $('.header__back-btn').click(function () {
        $messaging.animate({left: 500}, 600, 'easeInQuart').fadeOut();
    });

    $messagingMessages.scrollTop($messagingMessages[0].scrollHeight);

    $('.chat__contact').click(function () {
        $messaging.fadeIn().animate({left: 0}, 600, 'easeOutQuint')
    });

    $('.anti-fraud__close').click(function () {
        $('.anti-fraud').hide();
    });
});
