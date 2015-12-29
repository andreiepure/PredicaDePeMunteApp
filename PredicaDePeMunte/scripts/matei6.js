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