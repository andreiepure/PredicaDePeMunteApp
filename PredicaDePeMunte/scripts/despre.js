(function () {
    $(document).ready(function () {

        if (Modernizr.localstorage) {
            var storedFontSize = localStorage.getItem('fontSize');
            if (storedFontSize != null) {
                var allSelectors = ['li', '.row'];
                for (var selectorIndex = 0; selectorIndex < allSelectors.length; selectorIndex++) {
                    var myElements = document.querySelectorAll(allSelectors[selectorIndex]);
                    for (var i = 0; i < myElements.length; i++) {
                        myElements[i].style.fontSize = storedFontSize;
                    }
                }
            }
        } else {
            console.log("local storage not available");
        }
    });
})();