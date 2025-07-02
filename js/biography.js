$(window).on('load', function() {

    // Enable certain JS functions
    $("body").addClass("js");

    // Mobile menu
    // $('#mobile-menu-toggle').click(function() {
    //     if ($(this).hasClass('toggle-open')) {
    //         $("body").toggleClass("mobile-menu-open");
    //         $("#mobile-menu").fadeOut();
    //         $(this).toggleClass("toggle-open");
    //     } else {
    //         $("body").toggleClass("mobile-menu-open");
    //         $("#mobile-menu").fadeIn();
    //         $(this).toggleClass("toggle-open");
    //     }
    // });
    // $('#knockout').click(function() {
    //     if ($("body").hasClass('mobile-menu-open')) {
    //         $("body").toggleClass("mobile-menu-open");
    //         $("#mobile-menu").fadeOut();
    //         $('#mobile-menu-toggle').toggleClass("toggle-open");
    //     } else {
    //         $("body").toggleClass("mobile-menu-open");
    //         $("#mobile-menu").fadeIn();
    //         $(this).toggleClass("toggle-open");
    //     }
    // });

    $('#full-width-slider').royalSlider({
        arrowsNav: false,
        loop: false,
        keyboardNavEnabled: true,
        controlsInside: false,
        arrowsNavAutoHide: false,
        autoScaleSlider: false,
        controlNavigation: 'bullets',
        thumbsFitInViewport: false,
        navigateByClick: true,
        startSlideId: 0,
        autoPlay: false,
        transitionType: 'move',
        globalCaption: false,
        deeplinking: {
            enabled: true,
            change: false
        }
    });

    // Reveal on scroll
    $('.reveal:in-viewport').addClass('revealed');

    // Img preload
    $('#content .holder-wrap img').imgpreload({
        each: function() {
            $(this).parent().parent().addClass("image-loaded");
        },
        all: function() {}
    });

    // Tabs
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-inner').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // Fancybox
    // $("[data-fancybox]").fancybox({
    //     slideShow: false,
    //     fullScreen: false,
    //     thumbs: false,
    //     closeBtn: true,
    //     infobar: true,
    //     arrows: true,
    //     margin: [44, 0, 70, 0],
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0
    //     },
    //     vimeo: {
    //         color: 'f00'
    //     }
    // });

    // Fancybox.bind("[data-fancybox]",{
    //     slideShow: false,
    //     fullScreen: false,
    //     thumbs: false,
    //     closeBtn: true,
    //     infobar: true,
    //     arrows: true,
    //     margin: [44, 0, 70, 0],
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0
    //     },
    //     vimeo: {
    //         color: 'f00'
    //     }
    // });

    // smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('.grid').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        packery: {}
    });

    /*
    $('.section-title h2:not(.end-heading)').each(function() {
                var headingWidth = $(this).width();
                var titleTextHeight = $('.title-txt').height();
        $(this).height(headingWidth - titleTextHeight);
                //$( this ).css({ 'height': 'calc(' + headingWidth + 'px - ' + titleTextHeight + 'px)' });
                //$( this ).css({ 'height': 'calc(1em - ' + headingWidth+ 'px)' });
    });
*/
});

$(window).scroll(function() {
    // Reveal on scroll
    $('.reveal:in-viewport').addClass('revealed');
});


// Menu
// with disableScroll
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    let scrollPaused = false;

    window.addEventListener("scroll", function () {
        if (scrollPaused) return;

        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let isScrollingDown = scrollTop > lastScrollTop;

        if (isScrollingDown) {
            // Scrolling Down
            document.querySelectorAll(".site-header").forEach(el => {
                if (!el.classList.contains("css-1r4uo8r")) {
                    el.classList.replace("site-header", "site-header-hide");
                }
            });
            document.querySelectorAll(".site-header-dark").forEach(el => {
                if (!el.classList.contains("css-1r4uo8r")) {
                    el.classList.replace("site-header-dark", "site-header-hide");
                }
            });
            document.querySelectorAll(".menu-toggle").forEach(el => {
                if (!el.classList.contains("css-1r4uo8r")) {
                    el.classList.replace("menu-toggle", "menu-toggle-hide");
                }
            });
            document.querySelectorAll(".menu-toggle-down").forEach(el => {
                if (!el.classList.contains("css-1r4uo8r")) {
                    el.classList.replace("menu-toggle-down", "menu-toggle-hide");
                }
            });

            // document.querySelectorAll(".css-1rxxw9").forEach(el => {
            //     el.classList.replace("css-1rxxw9", "css-3u4rzc");
            // });

            // if (scrollTop > 400) {
            //     document.querySelectorAll(".menu-toggle-down").forEach(el => {
            //         el.classList.replace("menu-toggle-down", "menu-toggle");
            //     });
            // }

        } else {
            // Scrolling Up
            if (scrollTop < 400) {
                let isScrollingDown = false; // Added line
                document.querySelectorAll(".site-header-hide").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("site-header-hide", "site-header");
                    }
                });
                // document.querySelectorAll(".site-header-dark").forEach(el => {
                //     if (!el.classList.contains("css-1r4uo8r")) {
                //         el.classList.replace("site-header-dark", "site-header-hide");
                //     }
                // });
                document.querySelectorAll(".menu-toggle-hide").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("menu-toggle-hide", "menu-toggle");
                    }
                });
                // document.querySelectorAll(".menu-toggle-down").forEach(el => {
                //     if (!el.classList.contains("css-1r4uo8r")) {
                //         el.classList.replace("menu-toggle-down", "menu-toggle-hide");
                //     }
                // });

                // document.querySelectorAll(".css-3u4rzc").forEach(el => {
                //     el.classList.replace("css-3u4rzc", "css-1rxxw9");
                // });

            } else {
                document.querySelectorAll(".site-header-hide").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("site-header-hide", "site-header-dark");
                    }
                });
                document.querySelectorAll(".menu-toggle-hide").forEach(el => {
                    if (!el.classList.contains("css-1r4uo8r")) {
                        el.classList.replace("menu-toggle-hide", "menu-toggle-down");
                    }
                });
                // document.querySelectorAll(".css-80o3fs").forEach(el => {
                //     el.classList.replace("css-80o3fs", "css-1vo9grg");
                // });
                // document.querySelectorAll(".css-1b0rwyo").forEach(el => {
                //     el.classList.replace("css-1b0rwyo", "css-17xzk5j");
                // });
            } 
        }

        lastScrollTop = scrollTop;
    });

    // disableScroll
    // function disableScroll() {
    //     document.addEventListener("wheel", preventScroll, { passive: false });
    //     document.addEventListener("touchmove", preventScroll, { passive: false });
    //     document.addEventListener("keydown", preventArrowKeys);
    // }

    // function enableScroll() {
    //     document.removeEventListener("wheel", preventScroll);
    //     document.removeEventListener("touchmove", preventScroll);
    //     document.removeEventListener("keydown", preventArrowKeys);
    // }

    // function preventScroll(e) {
    //     e.preventDefault();
    // }

    // function preventArrowKeys(e) {
    //     const keys = [32, 37, 38, 39, 40]; // Space, Left, Up, Right, Down
    //     if (keys.includes(e.keyCode)) {
    //         e.preventDefault();
    //     }
    // }

    // Mobile menu
    $('#mobile-menu-toggle').click(function() {
        scrollPaused = !scrollPaused;

        // let isActive = $(this).hasClass('toggle-open');

        // if (isActive) {
        //     enableScroll();
        // } else {
        //     disableScroll();
        // }

        if ($(this).hasClass('toggle-open')) {
            $("body").toggleClass("mobile-menu-open");
            $("#mobile-menu").fadeOut();
            $(this).toggleClass("toggle-open");
        } else {
            $("body").toggleClass("mobile-menu-open");
            $("#mobile-menu").fadeIn();
            $(this).toggleClass("toggle-open");
        }
    });
    $('#knockout').click(function() {
        scrollPaused = !scrollPaused;

        if ($("body").hasClass('mobile-menu-open')) {
            $("body").toggleClass("mobile-menu-open");
            $("#mobile-menu").fadeOut();
            $('#mobile-menu-toggle').toggleClass("toggle-open");
        } else {
            $("body").toggleClass("mobile-menu-open");
            $("#mobile-menu").fadeIn();
            $(this).toggleClass("toggle-open");
        }
    });
});

// Swiper
// var swiper = new Swiper('.swiper', {
//     speed: 500,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     loop: false,
//     parallax: true,
//     simulateTouch: true, // Disable touch dragging
//     grabCursor: true // Disable cursor changes by Swiper
// });

// // Update the rsNavSelected class based on the active slide
// function updateSelectedNav(index) {
//     document.querySelectorAll('.rsNavItem.rsBullet').forEach((item, i) => {
//         if (i === index) {
//             item.classList.add('rsNavSelected');
//         } else {
//             item.classList.remove('rsNavSelected');
//         }
//     });
// }

// // Handle clicks on navigation bullets
// document.querySelectorAll('.rsNavItem.rsBullet').forEach((item, index) => {
//     item.addEventListener('click', () => {
//         swiper.slideToLoop(index); // Navigate to the corresponding slide
//     });
// });

// swiper.on('slideChange', () => {
//     const realIndex = swiper.realIndex; // Get the real index of the active slide
//     updateSelectedNav(realIndex);

//     // Manually control the disabled state of the "Next" button
//     const nextButton = document.querySelector('.swiper-button-next');
//     const totalSlides = document.querySelectorAll('.swiper-slide').length; // Get the total number of slides
//     const isLastSlide = realIndex === totalSlides - 0; // Check if the active slide is the last one

//     // Disable or enable the "Next" button
//     if (isLastSlide) {
//         nextButton.classList.add('swiper-button-disabled');
//     } else {
//         nextButton.classList.remove('swiper-button-disabled');
//     }
// });

// (function checkNextButtonState() {
//     const realIndex = swiper.realIndex; // Get the real index of the active slide
//     const totalSlides = document.querySelectorAll('.swiper-slide').length; // Get the total number of slides
//     const nextButton = document.querySelector('.swiper-button-next');
//     const isLastSlide = realIndex === totalSlides - 0;

//     if (isLastSlide) {
//         nextButton.classList.add('swiper-button-disabled');
//     } else {
//         nextButton.classList.remove('swiper-button-disabled');
//     }
// })();


// // Add functionality for previous and next buttons
// document.querySelector('.swiper-button-prev').addEventListener('click', () => {
//     swiper.slidePrev(); // Navigate to the previous slide
// });

// document.querySelector('.swiper-button-next').addEventListener('click', () => {
//     swiper.slideNext(); // Navigate to the next slide
// });


// // Function to navigate to the next or previous slide
// function navigateSlide(direction) {
//     if (direction === 'next') {
//         swiper.slideNext(); // Move to next slide
//     } else if (direction === 'prev') {
//         swiper.slidePrev(); // Move to previous slide
//     }
// }

// // Add the event listeners for the left and right halves of the slide
// document.querySelectorAll('.slide-left').forEach(item => {
//     item.addEventListener('click', () => navigateSlide('prev'));
// });

// document.querySelectorAll('.slide-right').forEach(item => {
//     item.addEventListener('click', () => navigateSlide('next'));
// });



// Swiper with grabbing cursor
const grabCursorElement = document.querySelector('.swiper');

// Function to update the cursor state
function setGrabbingCursor() {
    grabCursorElement.classList.remove('grab-cursor');
    grabCursorElement.classList.add('grabbing-cursor');
}

function setGrabCursor() {
    grabCursorElement.classList.remove('grabbing-cursor');
    grabCursorElement.classList.add('grab-cursor');
}

// Add listeners for mouse events
grabCursorElement.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        setGrabbingCursor();
    }
});
grabCursorElement.addEventListener('mouseup', setGrabCursor);
grabCursorElement.addEventListener('mouseleave', setGrabCursor);

// Add Swiper events for touch simulation
var swiper = new Swiper('.swiper', {
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false,
    parallax: true,
    simulateTouch: true, // Enable touch simulation
    grabCursor: false, // Disable Swiper's default cursor handling
});

// Listen for Swiper touch events to handle cursor changes
swiper.on('touchStart', setGrabbingCursor);
swiper.on('touchEnd', setGrabCursor);

// Ensure the cursor is in 'grab' state when the page loads
document.addEventListener('DOMContentLoaded', setGrabCursor);



// Update the rsNavSelected class based on the active slide
function updateSelectedNav(index) {
    document.querySelectorAll('.rsNavItem.rsBullet').forEach((item, i) => {
        if (i === index) {
            item.classList.add('rsNavSelected');
        } else {
            item.classList.remove('rsNavSelected');
        }
    });
}

// Handle clicks on navigation bullets
document.querySelectorAll('.rsNavItem.rsBullet').forEach((item, index) => {
    item.addEventListener('click', () => {
        swiper.slideToLoop(index); // Navigate to the corresponding slide
    });
});

swiper.on('slideChange', () => {
    const realIndex = swiper.realIndex; // Get the real index of the active slide
    updateSelectedNav(realIndex);

    // Manually control the disabled state of the "Next" button
    const nextButton = document.querySelector('.swiper-button-next');
    const totalSlides = document.querySelectorAll('.swiper-slide').length; // Get the total number of slides
    const isLastSlide = realIndex === totalSlides - 0; // Check if the active slide is the last one

    // Disable or enable the "Next" button
    if (isLastSlide) {
        nextButton.classList.add('swiper-button-disabled');
    } else {
        nextButton.classList.remove('swiper-button-disabled');
    }
});

(function checkNextButtonState() {
    const realIndex = swiper.realIndex; // Get the real index of the active slide
    const totalSlides = document.querySelectorAll('.swiper-slide').length; // Get the total number of slides
    const nextButton = document.querySelector('.swiper-button-next');
    const isLastSlide = realIndex === totalSlides - 0;

    if (isLastSlide) {
        nextButton.classList.add('swiper-button-disabled');
    } else {
        nextButton.classList.remove('swiper-button-disabled');
    }
})();


// Add functionality for previous and next buttons
document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    swiper.slidePrev(); // Navigate to the previous slide
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiper.slideNext(); // Navigate to the next slide
});


// Function to navigate to the next or previous slide
function navigateSlide(direction) {
    if (direction === 'next') {
        swiper.slideNext(); // Move to next slide
    } else if (direction === 'prev') {
        swiper.slidePrev(); // Move to previous slide
    }
}

// Add the event listeners for the left and right halves of the slide
document.querySelectorAll('.slide-left').forEach(item => {
    item.addEventListener('click', () => navigateSlide('prev'));
});

document.querySelectorAll('.slide-right').forEach(item => {
    item.addEventListener('click', () => navigateSlide('next'));
});
// End of Swiper with grabbing cursor
// End of Swiper












