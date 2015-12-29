
(function () {

    $(document).ready(function () {

        if (Modernizr.localstorage) {
            var foo = localStorage.getItem('fontSize');
            console.log(foo);
            if (foo != null)
            {
                $('select option[value="' + foo + '"]').attr("selected", true);
            }
        } else {
            console.log("local storage not available");
        }

        $('#font-size-selector').change(function () {
            console.log("Will set fontSize to " + this.value);
            if (Modernizr.localstorage) {
                 foo = localStorage.setItem('fontSize', this.value);
            }
            else {
                console.log("local storage not available");
            }
        });
    });
} )();