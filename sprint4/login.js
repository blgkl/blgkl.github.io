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
        $.ajax({
            type: "get",
            url: "./data.json",
            timeout: 10000, 
            error: function () {
                alert("Error: It’s not working!"); 
            },
            dataType: "json", 
            success: function (data) {
                $.each(data.user, function (index, user) {
                    if(user.mail==email && user.password==password){
                        //success message
                        toastr.success('Form submitted successfully!');
                        window.location.href="index.html";
                    }
                    else{
                        toastr.error('Wrong email or password!');
                    }
                });
            }
        });
    });
});
