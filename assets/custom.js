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
    });
    $('.center-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: $('.block-real .prev'),
        nextArrow: $('.block-real .next'),
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '150px'
                },
            },
            {
                breakpoint: 989,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 369,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.collection-product-grid--wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 989,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.block_cart-drawer-collection-slider').slick({
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '86px',
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.drawer-collection-prev'),
        nextArrow: $('.drawer-collection-next'),
        responsive: [
            {
                breakpoint: 749,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    const $sample_atc_submit_event = async function ($form_data) {
        const $sample_addtocart_result = await fetch('/cart/add.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify($form_data)
        });
        const $atc_success_result = await $sample_addtocart_result.json();
        console.log("$atc_success_result", $form_data)
        if ($atc_success_result.items) {
            if (document.querySelector('cart-drawer') && document.querySelector('cart-drawer').classList.contains('is-empty')) document.querySelector('cart-drawer').classList.remove('is-empty');
            const quickAddModal = document.querySelector('quick-add-modal');
            if (quickAddModal) {
                document.body.addEventListener('modalClosed', () => {
                    setTimeout(() => { document.querySelector('cart-drawer').renderContents($atc_success_result) });
                }, { once: true });
                quickAddModal.hide(true);
            } else {
                document.querySelector('cart-drawer').renderContents($atc_success_result);
            }
            setTimeout(function () {
                $('.block_cart-drawer-collection-slider').slick({
                    infinite: true,
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '86px',
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    prevArrow: $('.drawer-collection-prev'),
                    nextArrow: $('.drawer-collection-next'),
                    responsive: [
                        {
                            breakpoint: 749,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                })
            }, 1000);
        } else {
            console.error($atc_success_result);
        }
    }


    $(document).on("click", ".quick-view-block .card-sub-box", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(".block_sub-box").hasClass("active")) {
            $(".block_selct-box-pro").removeClass("hidden")
        } else {
            $(".block_selct-box-pro").addClass("hidden")
        }
    })

    $(document).on("click", ".block-dark-btn", function () {
        $(this).toggleClass("active");
        $("body").toggleClass("block_dark")
    })

    $(document).on("click", ".card-product-subscription--content .card-sub-box", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(".block_sub-box").hasClass("active")) {
            $(".block_selct-box-pro").removeClass("hidden")
        } else {
            $(".block_selct-box-pro").addClass("hidden")
        }
    });
});