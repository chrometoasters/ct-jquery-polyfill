ct-jquery-polyfill
==================

A pattern for detecting support and loading polyfills.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation + Usage

    bower install https://github.com/chrometoasters/ct-jquery-polyfill#v1.0.0 --save

---

### Dependencies

#### `<head>` (IE only):

Ensure that the following dependencies are loaded by your page / via Grunt:

**Note:** The HTML5Shiv is not used by this plugin but is a common polyfill which is required for MSIE6-8.

1. `html5shiv/dist/html5shiv.js` (via Bower)
1. `html5shiv/dist/html5shiv-printshiv.js` (via Bower)

#### Bottom of `<body>`:

Ensure that the following dependencies are loaded by your page / via Grunt:

1. `ct-jquery-polyfill/dist/tests/modernizr.printshiv-addtest-teststyles-css_lastchild-load.js` (bundled)
1. `ct-jquery-polyfill/dist/tests/ct-jquery-supports.js` (bundled)
1. `ct-jquery-supports--config.js`, containing:
    1. `CT_SUPPORTS.polyfills_path = '../vendor'; // path relative to scripts/custom.js`
    1. `CT_SUPPORTS.tests_path = '../vendor/ct-jquery-polyfill/dist/tests'; // path relative to scripts/custom.js`
1. `platform.js/platform.js` (via Bower)
1. `ct-jquery-polyfill/dist/ct-jquery-polyfill.js` (bundled)

**Note:** The following dependencies are loaded via `ct-jquery-polyfill.js` and therefore should not be loaded manually:

1. `checked-polyfill` (via Bower)
1. `ct-jquery-last-child` (via Bower)
1. `ct-jquery-nth-child` (via Bower)

---

### Polyfills

#### 1. `:checked` -> `.checked`

Ensure that elements to polyfill are contained within `.polyfill`

#### 2. `:nth-child` -> `.nth-child`

Ensure that elements to polyfill are contained within `.l-custom`, which is contained within `.polyfill`

#### 3. `:last-child` -> `.last-child`

Ensure that elements to polyfill are contained within `.l-custom`, which is contained within `.polyfill`
