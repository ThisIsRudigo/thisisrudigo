$(document).ready(function(){

	//Email validation

	$('#useremail').focusout(function () {
	    function isEmail(email) {
	        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	        return regex.test(email);
	    }

	    var emailinput = $(this).val();

	    if (emailinput === "" || !(isEmail(emailinput))) {
	        $('#wrong').css('display', 'block');
	    }else{
	    	$('#wrong').css('display', 'none')
	    }
	});


	//Password Validation

	$('#userpassword').focusout(function(){

		var pass= $('#userpassword').val();

		if(pass.length < 6){
			$('#wpass').css('display', 'block');
		}else{
			$('#wpass').css('display', 'none');
		}
	});


	//Register details


	$('#signin').click(function(e){
       e.preventDefault()


       /*input your variable*/
       var name = $('#username');
       var email = $('#useremail');
       var password = $('#userpassword');
       var accountType = $('#accountType');

      


       var student = {
       	name: name.val(),
       	email: email.val(),
       	password: password.val(),
       	accountType: accountType.val(),
       }

       $.ajax({
       	type: 'POST',
       	url: 'http://18.220.175.109/account/register/admin',
       	data: student,
       	dataType: "JSON",
       	success: function(){
       		window.location= 'login.html';
       	},
         error:function(status){
         	$('#message').css('display', 'block'),
         	$('#message').append(status.responseJSON.error);
         }
       });

	});
});