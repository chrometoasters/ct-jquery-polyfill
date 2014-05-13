ct-jquery-polyfill
==================

A pattern for loading polyfills

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation + Usage

    bower install https://github.com/chrometoasters/ct-jquery-polyfill#v1.0.0 --save

### Dependencies

Ensure that the following dependencies are loaded by your page / via Grunt:

#### `<head>` (IE only):

1. `html5shiv/dist/html5shiv.min.js` (via Bower)
1. `html5shiv/dist/html5shiv-printshiv.min.js` (via Bower)

#### Bottom of `<body>`:

1. `ct-jquery-polyfill/dist/tests/modernizr.printshiv-addtest-teststyles-css_lastchild-load.js` (bundled)
1. `ct-jquery-polyfill/dist/tests/ct-jquery-supports.js’ (bundled)
1. `platform.js/platform.js` (via Bower)

Note: The following dependencies are loaded via `ct-jquery-polyfill.js` and therefore should not be loaded manually:

1. `checked-polyfill` (via Bower)
1. `ct-jquery-last-child` (via Bower)
1. `ct-jquery-nth-child` (via Bower)