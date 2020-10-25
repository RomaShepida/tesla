$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
    });

    $('.header__btn').on('click', function () {
        $('.menu').addClass('active');
    })

    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
    })
});