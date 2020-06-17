jQuery(document).ready(function ($) {
    "use strict"
    /*-----------------------------------------------------------------------------------*/
    /*    PORTFOLIO FILTER
    /*-----------------------------------------------------------------------------------*/
    if (window.location.hash.length > 0) {
        $(`a[data-toggle="tab"][aria-controls="${window.location.hash.substr(1)}"]`).click()
    }
    $('a[data-toggle="tab"][aria-controls="portfolio"]').on('shown.bs.tab', function (e) {
        $('#Container').mixItUp()
    })
});





