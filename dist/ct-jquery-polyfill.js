// VALIDATION SETTINGS FOR JSHINT.COM

// This file
/*jshint browser:true, jquery:true, strict:true, devel:true */
// globals prevents an error when referencing variables/functions which are concatenated into outward-bound-vendor.combined.js
/*globals Modernizr:true, CT_SUPPORTS:true, selectorSupported:true */

// if the feature test fails,
// the JavaScript polyfill is dynamically loaded and executed

// Dependencies: Modernizr with load (yepnope) option
// http://modernizr.com/docs/#load

( function($) {

    "use strict"; // JSHINT - Use ECMAScript 5 Strict Mode

    $(document).ready( function() {

        if ( typeof CT_VENDOR_PATH === 'undefined' ) {
            throw new Error('CT_VENDOR_PATH has not been set');
        }

        var nonModernizr = {}, // object for storing our own tests
            $polyfill_root = $('.polyfill'),
            $polyfill_container = $('.polyfill--contents'),
            $polyfill_debug = false;

        if ( $polyfill_debug ) {
            if ( ! $polyfill_root.length || ! $polyfill_container.length ) {
                throw new Error('Cannot polyfill as .polyfill wrappers are missing');
            }
        }

        // :CHECKED
        // input:checked -> input.checked, label[for="foo"].checked

        // https://github.com/Modernizr/Modernizr/pull/904#issuecomment-30106739
        Modernizr.addTest('checked', function(){
            return Modernizr.testStyles('#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}',
                function(elem, rule){
                    var cb = document.createElement('input');
                    cb.setAttribute("type", "checkbox");
                    cb.setAttribute("checked", "checked");
                    elem.appendChild(cb);
                    return cb.offsetLeft === 20;
                }
            );
        });

        Modernizr.load({
            test: Modernizr.checked,
            nope: ( CT_VENDOR_PATH + 'checked-polyfill/checked-polyfill.min.js' ),
            callback: function () {
                // Modernizr docs use 'complete'
                // but YepNope's 'callback' works much better
                // in Chrome 31.0.1650.63 (with yep) and IE8 (with nope)

                var $checkable = $polyfill_container.find('input[type="radio"], input[type="checkbox"]');

                if ( $checkable.length ) {
                    $checkable.checkedPolyfill();
                }
            }
        });

        // :LAST-CHILD
        // :last-child -> input.ast-child

        Modernizr.load({
            test: Modernizr.lastchild,
            nope: ( CT_VENDOR_PATH + 'ct-jquery-last-child/dist/ct-jquery-last-child.js' )
        });

        // :NTH-CHILD
        // there is no Modernizr :nth-child test so use CT_SUPPORTS test

        Modernizr.load({
            test: CT_SUPPORTS.nthchild(),
            nope: ( CT_VENDOR_PATH + 'ct-jquery-nth-child/dist/ct-jquery-nth-child.js' )
        });

        // Debugging tests
        // console.log( 'Modernizr.checked', Modernizr.checked );
        // console.log( 'Modernizr.lastchild', Modernizr.lastchild );
        // console.log( 'CT_SUPPORTS.nthchild()', CT_SUPPORTS.nthchild() );

    });

})(jQuery);
