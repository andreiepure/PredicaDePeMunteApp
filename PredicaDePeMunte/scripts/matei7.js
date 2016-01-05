(function () {

    $(document).ready(function () {
        if (Modernizr.localstorage) {
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

        $("#btn-7-1").click(function () {
            $("#modal-7-1").modal();
        });
        $("#btn-7-6").click(function () {
            $("#modal-7-6").modal();
        });
        $("#btn-7-12").click(function () {
            $("#modal-7-12").modal();
        });
        $("#btn-7-15").click(function () {
            $("#modal-7-15").modal();
        });
        $("#btn-7-24").click(function () {
            $("#modal-7-24").modal();
        });
        $("#btn-7-29").click(function () {
            $("#modal-7-29").modal();
        });
    });
} )();