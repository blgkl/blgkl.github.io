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
      
      var name = $("#name").val();
      var surname = $("#surname").val();
      var id = $("#id").val();
      var mail = $("#mail").val();
      var comment = $("#comment").val();

      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        type: "GET",
        success: function (data) {
          setTimeout(() => {
            var redirectUrl = 'feedback.html?name=' + encodeURIComponent(name) +
                              '&surname=' + encodeURIComponent(surname) +
                              '&id=' + encodeURIComponent(id) +
                              '&mail=' + encodeURIComponent(mail) +
                              '&comment=' + encodeURIComponent(comment);
            window.location.href = redirectUrl;
          }, 1000);
        },
        error: function (error) {
          console.error("Error:", error);
        }
      });
    } else {
      toastr.error("Form submission failed. Please fill all required fields.");
    }
  });

  $("form input").focus(function () {
    $(this).removeClass("error");
  });
});
