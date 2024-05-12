$(document).ready(function () {
  toastr.options = {
    positionClass: "toast-bottom-right",
  };

  $("form").submit(function (event) {
    //prevent default form submission
    event.preventDefault();

    // Validate form inputs
    var isValid = true;
    $("form input").each(function () {
      if ($(this).val() === "") {
        isValid = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });

    // if form is valid, submit the form
    if (isValid) {
      toastr.success("Form submitted successfully!");
    } else {
      //if form is not valid, show error message
      toastr.error("Form submission failed. Please fill all required fields.");
    }
  });

  $("form input").focus(function () {
    $(this).removeClass("error");
  });
});
