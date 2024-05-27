$(document).ready(function () {
  toastr.options = {
    positionClass: "toast-bottom-right",
  };

  $("#joinForm").submit(function (e) {
    //prevents the default behavior
    e.preventDefault();

    let hasEmptyInput = false;

        // go through every input element in the form
        $("#joinForm input").each(function () {
            //check if the input value is empty
            if ($(this).val().trim() === "") {
                //if the input is empty, display error toastr
                hasEmptyInput = true;
                toastr.error("All fields must be filled out.");
                return false;
            }
        });

    //check if passwords match
    if(!hasEmptyInput){
      var password = $("#password").val();
    var confirmPassword = $("#password2").val();
    if (password !== confirmPassword) {
      toastr.error("Passwords do not match!");
      return;
    } 
    else{
      toastr.success("Form submitted successfully!");
    }
    } 
  });
});
