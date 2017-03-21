$(document).ready(function () {
    /* active nav item code */
    var pgurl = window.location.href.substr(window.location.href
            .lastIndexOf("/") + 1);
    $(".navbar-nav li a").each(function () {

        if ($(this).attr("href") === pgurl || $(this).attr("href") === "/index.php")
            $(this).addClass("active");
    });


    $('a[rel="relativeanchor"]').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
    $('.top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $(".featured-clients").slick({
        autoplay: true,
        slidesToShow: 5,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }]
    });
});