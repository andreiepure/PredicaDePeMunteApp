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