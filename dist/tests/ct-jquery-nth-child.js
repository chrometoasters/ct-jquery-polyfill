// http://markdalgleish.com/2011/03/self-executing-anonymous-functions/

( function($) {

    var $body = $('body');
    var $container = $('.polyfill'); // this must be present in the page, wrapping the content you wish to polyfill
    var parent_selector = '[class^="l-custom"], [class*=" l-custom"]';
    var polyfill_class = 'nth-child-';

    if ( ! $body.length || ! $container.length ) {
        return;
    }

    // detach container from DOM for heavy manipulation of contents
    // http://flippinawesome.org/2013/11/25/writing-better-jquery-code/
    $container.detach();

    // NTH-CHILD
    // http://jsfiddle.net/dotherightthing/3ppxz/

    var $custom_layouts = $container.find( parent_selector );

    $custom_layouts.each(function (i, item) {

        setTimeout( function() {

            var $cols = $(item).children();

            // .grid > .col:nth-child(n)
            $cols.each(function (y, yitem) {
                var n = y + 1;
                $(yitem).addClass( polyfill_class + n );
            });

        }, 5);
    });

    // reattach container to DOM
    $body.append( $container );

})(jQuery);