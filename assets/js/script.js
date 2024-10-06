$(document).ready(function () {
    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').slick({
            centerMode: true,
            centerPadding: '370px', // Adjust this for larger screens
            slidesToShow: 2, // Two slides for larger screens
            focusOnSelect: true,
            arrows: false,
            autoplay: true, // Enable autoplay
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            dots: false,
            draggable: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2, // Show one slide on smaller screens
                        centerPadding: '250px' // Adjust padding for smaller screens
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '100px' // Further reduce padding for very small screens
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '50px' // Further reduce padding for very small screens
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0' // Further reduce padding for very small screens
                    }
                }
            ]
        });
    }

    if($('.inp-eye-icon').length > 0) {
        $('.inp-eye-icon').click(function () {
            var input = $(this).prev('input');
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                $(this).addClass('active');
            } else {
                input.attr('type', 'password');
                $(this).removeClass('active');
            }
        });
    }

    if ($('.hero-carousel').length > 0) {
        $('.hero-carousel').slick({
            slidesToShow: 1, // Show 1 slide at a time
            slidesToScroll: 1, // Scroll 1 slide at a time
            autoplay: true, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: false, // Hide previous arrow
            nextArrow: false, // Hide next arrow
            dots: false, // Hide navigation dots
            draggable: true, // Enable dragging
            infinite: true, // Infinite looping
            variableWidth: false // Variable width based on content width
        });
    }
});
