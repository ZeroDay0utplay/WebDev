$(document).click(function(event) {
    var text = $(event.target).text();
    $("h1").css("color", text);
});