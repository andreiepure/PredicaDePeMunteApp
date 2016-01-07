
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

        // modals
        $("#btn-5-3").click(function () {
            $("#modal-5-3").modal();
        });
        $("#btn-5-11").click(function () {
            $("#modal-5-11").modal();
        });
        $("#btn-5-15").click(function () {
            $("#modal-5-15").modal();
        });
        $("#btn-5-17").click(function () {
            $("#modal-5-17").modal();
        });
        $("#btn-5-18").click(function () {
            $("#modal-5-18").modal();
        });
        $("#btn-5-22").click(function () {
            $("#modal-5-22").modal();
        });
        $("#btn-5-29").click(function () {
            $("#modal-5-29").modal();
        });
        $("#btn-5-31").click(function () {
            $("#modal-5-31").modal();
        });
        $("#btn-5-37").click(function () {
            $("#modal-5-37").modal();
        });
        $("#btn-5-39").click(function () {
            $("#modal-5-39").modal();
        });
        $("#btn-5-46").click(function () {
            $("#modal-5-46").modal();
        });
    });
} )();