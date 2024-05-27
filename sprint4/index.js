//we used tippy to make a dropdown menu for aboutUs page
tippy("#aboutUs", {
    content: `
    <div class="dropdown-menu">
        <a href="./aboutUs.html#vision" class="dropdown-item">Vision</a>
        <a href="./aboutUs.html#mission" class="dropdown-item">Mission</a>
        <a href="./aboutUs.html#history" class="dropdown-item">History</a>
        <a href="./aboutUs.html#schema" class="dropdown-item">Schema</a>
    </div>
`,
placement: 'bottom', 
interactive: true, 
allowHTML: true, 
});

//we used an accordion widget to make a short question&answer part
$(document).ready(function(){
    $(".accordion").accordion();
  });
  