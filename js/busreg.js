$(document).ready(function() {

    //Email validation

    $('#useremail').focusout(function() {
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        var emailinput = $(this).val();

        if (emailinput === "" || !(isEmail(emailinput))) {
            $('#wrong').css('display', 'block');
        } else {
            $('#wrong').css('display', 'none')
        }
    });


    //Password Validation

    $('#userpassword').focusout(function() {

        var pass = $('#userpassword').val();

        if (pass.length < 6) {
            $('#wpass').css('display', 'block');
        } else {
            $('#wpass').css('display', 'none');
        }
    });


    //Register details


    $('#regis').click(function(e) {
        e.preventDefault()


        /*input your variable*/
        var name = $('#name');
        var email = $('#email');
        var password = $('#password');
        var businessType = $('#businessType');




        var student = {
            name: name.val(),
            email: email.val(),
            password: password.val(),
            businessType: businessType.val()
        }

        $.ajax({
            type: 'POST',
            url: 'http://18.220.175.109/account/register/business',
            data: student,
            dataType: "JSON",
            success: function() {
                alert('Registeration succesful!!! Thank you for registering...');
                // window.location = 'index.html';
            },
            error: function(status) {
                // $('#message').css('display', 'block'),
                //     $('#message').html(status.responseJSON.error);
                console.log(status.responseText);
                console.log(student);
            }
        });

    });
});