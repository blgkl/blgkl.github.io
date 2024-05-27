$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');

    $("#message").text(name);
  });