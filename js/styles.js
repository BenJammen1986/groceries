$(document).ready(function() {
    $("form#grocerylist").submit(function() {
        event.preventDefault();
        $("form#grocerylist").hide();

    });
});
