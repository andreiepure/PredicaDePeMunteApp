
(function () {
    $(document).ready(function () {

        if (Modernizr.localstorage) {
            var foo = localStorage.getItem('fontSize');
            console.log(foo);
            if (foo != null)
            {
                var myElements = document.querySelectorAll('li');
                for (var i = 0; i < myElements.length; i++) {
                    myElements[i].style.fontSize = foo;
                }
                var myElements = document.querySelectorAll('.modal-body');
                for (var i = 0; i < myElements.length; i++) {
                    myElements[i].style.fontSize = foo;
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