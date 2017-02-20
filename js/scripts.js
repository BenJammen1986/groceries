var allItems = [];
var sorted = [];

$(document).ready(function() {
    $("#grocerylist").submit(function() {
        event.preventDefault();
        $("#grocerylist").hide();
        allItems = ["item01", "item02", "item03", "item04", "item05", "item06", "item07", "item08"];
        allItems.forEach(function(inputItem) {
            sorted.push($("input#" + inputItem).val());
            console.log(sorted);
            sorted.sort()
            console.log(sorted);
        })
        sorted.forEach(function(inputItem) {
            $("ul").append($("<li>").append("" + inputItem));
            console.log(sorted);
        })
    });
});
