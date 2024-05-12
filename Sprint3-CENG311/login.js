$(document).ready(function() {
    toastr.options = {
        positionClass: 'toast-bottom-right'
    };

    $('form').submit(function(event) {
        //prevent default form submission
        event.preventDefault();

        //gets input values
        var email = $('#mail').val();
        var password = $('#password').val();

        //input validation
        if(email.trim() === '') {
            toastr.error('Please Enter Your E-mail!');
            return;
        }
        if(password.trim() === '') {
            toastr.error('Please Enter Your Password!');
            return;
        }
        //success message
        toastr.success('Form submitted successfully!');
    });
});
