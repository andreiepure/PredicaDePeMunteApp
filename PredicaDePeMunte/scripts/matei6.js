(function () {
    $(document).ready(function () {

        if (Modernizr.localstorage) {
            UpdateTheme(localStorage.getItem('theme'));

            var storedFontSize = localStorage.getItem('fontSize');
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
        } else {
            console.log("local storage not available");
        }

        $("#btn-6-1").click(function () {
            $("#modal-6-1").modal();
        });
        $("#btn-6-2").click(function () {
            $("#modal-6-2").modal();
        });
        $("#btn-6-11").click(function () {
            $("#modal-6-11").modal();
        });
        $("#btn-6-12").click(function () {
            $("#modal-6-12").modal();
        });
        $("#btn-6-13").click(function () {
            $("#modal-6-13").modal();
        });
        $("#btn-6-22").click(function () {
            $("#modal-6-22").modal();
        });
        $("#btn-6-24").click(function () {
            $("#modal-6-24").modal();
        });
    });
} )();