// Initialize page plugins once jQuery and the DOM are ready.
$(document).ready(function () {
    if ($.fn.fullpage) {
        $('#fullpage').fullpage({
            verticalCentered: false,
            scrollingSpeed: 600,
            autoScrolling: false,
            css3: true,
            navigation: true,
            navigationPosition: 'right'
        });
    }

    if (typeof WOW === 'function') {
        new WOW().init();
    }

    if ($.fn.textrotator) {
        $('.rotate').textrotator({
            animation: 'fade',
            separator: ',',
            speed: 2500
        });
    }
});
