$(document).ready(function(){

var languages = [
  "Action Script",
  "Apple Script",
  "Asp",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
];

$("#language").autocomplete({
  source: languages
});

$("#birthday").click(function () {
  $(this).datepicker();
});

    
});
