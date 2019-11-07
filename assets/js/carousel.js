$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
    }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
    }]
    });
});

$(document).ready(function () {
    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        prevArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
                }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
                }]
    });
});

$(document).ready(function () {
    $('.four-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        prevArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
                }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
                }]
    });
});


$('.thumbnail-carousel .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});
