$(document).ready(function () {
    $('.marquee-slider').slick({
        speed: 1700,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 7,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false
    });
    $('.weight-loss--wrapper-container-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.weight-loss-prev'),
        nextArrow: $('.weight-loss-next'),
    })
});