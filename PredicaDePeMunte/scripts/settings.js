/**
 * The file for changing the settings of the app.
 */

(function () {
    function UpdateExample(storedFontSize)
    {
        if (storedFontSize != null)
        {
            var allSelectors = ['.btn', 'li', '.modal-body', '.modal-footer', '.modal-title' ];
            for (var selectorIndex = 0; selectorIndex < allSelectors.length; selectorIndex++) {
                var myElements = document.querySelectorAll(allSelectors[selectorIndex]);
                for (var i = 0; i < myElements.length; i++) {
                    myElements[i].style.fontSize = storedFontSize;
                }
            }
        }
    }

    $(document).ready(function () {

        if (Modernizr.localstorage) {
            var storedFontSize = localStorage.getItem('fontSize');
            if (storedFontSize != null)
            {
                $('select option[value="' + storedFontSize + '"]').attr("selected", true);
                UpdateExample(storedFontSize);
            }

            var storedTheme = localStorage.getItem('theme');
            if (storedTheme != null)
            {
                $('select option[value="' + storedTheme + '"]').attr("selected", true);
                UpdateTheme(storedTheme);
            }
        } else {
            // TODO how to send myself logs? for V2?
            console.log("local storage not available");
        }

        $('#font-size-selector').change(function () {
            if (Modernizr.localstorage) {
                localStorage.setItem('fontSize', this.value);
                UpdateExample(this.value);
            }
            else {
                console.log("local storage not available");
            }
        });

        $('#theme-selector').change(function () {
            if (Modernizr.localstorage) {
                localStorage.setItem('theme', this.value);
                UpdateTheme(this.value);
            }
            else {
                console.log("local storage not available");
            }
        });

    });
} )();