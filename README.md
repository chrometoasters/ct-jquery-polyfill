ct-jquery-polyfill
==================

A pattern for detecting support and loading polyfills.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation + Usage

    bower install https://github.com/chrometoasters/ct-jquery-polyfill#v1.1.0 --save

---

### Dependencies

Ensure that the following dependencies are loaded by your page / via Grunt:

#### `<head>` (IE only):

**Note:** The HTML5Shiv is not used by this plugin but is a common polyfill which is required for MSIE6-8. We are not loading this plugin via Modernizr.

1. `html5shiv/dist/html5shiv-printshiv.js` (via Bower; note that this script contains `html5shiv.js`)

#### Bottom of `<body>`:

Although polyfills are loaded from a script file, JavaScript paths are relative to the HTML document.

Therefore we must provide a root-relative path to the vendor folder: `CT_VENDOR_PATH`.

Note that the `ct-jquery-polyfill` assumes that it, and the polyfills to be loaded, are all located at the same `CT_VENDOR_PATH`.

        <script>
            CT_VENDOR_PATH = '/chrometoaster/ct-jquery-polyfill/bower_components/';
        </script>

And:

1. `platform.js/platform.js` (via Bower)
1. `ct-jquery-supports/dist/ct-jquery-supports.js` (via Bower)
1. `ct-jquery-polyfill/dist/modernizr.custom.js` (bundled)
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