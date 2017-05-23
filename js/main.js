$(function () {
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
        $messaging.animate({left: 2000}, 700).fadeOut();
    });

    $messagingMessages.scrollTop($messagingMessages[0].scrollHeight);

    $('.chat__contact').click(function () {
        $messaging.fadeIn().animate({left: 0}, 300)
    });

    $('.anti-fraud__close').click(function () {
        $('.anti-fraud').hide();
    });
});
