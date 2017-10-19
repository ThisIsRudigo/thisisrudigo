
$('document').ready(function() {

	/*student registration*/

	$('#signin').click(function(e){
       e.preventDefault()




       /*input your variable*/
       var name = $('#name');
       var email = $('#email');
       var password = $('#password');
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
       		alert('sucessful registration');
       	},
         error:function(status){
         	alert('error '+ status.responseText);
         }
       });

	});

			
				     
				/*business registration*/

					$('#submit').click(function(e){
				       e.preventDefault()


				       /*input your variable*/
				       var name = $('#name');
				       var email = $('#email');
				       var password = $('#password');
				       var businessType = $('#businessType');

				       var business = {
				       	name: name.val(),
				       	email: email.val(),
				       	password: password.val(),
				       	businessType: businessType.val(),
				       }

				       $.ajax({
				       	type: 'POST',
				       	url: 'http://18.220.175.109/account/register/business',
				       	data: business,
				       	dataType: "JSON",
				       	success: function(){
				       		alert('sucessful registration');
				       	},
				         error:function(status){
				         	alert('error '+ status.responseText);
				         }
				       });

					});
				     

				/*student login*/

					$('#login').click(function(e){
				       e.preventDefault()


				       /*input your variable*/
				       
				       var email = $('#email');
				       var password = $('#password');
				       

				       var studentLogin = {
				       	
				       	email: email.val(),
				       	password: password.val(),
				       	
				       }


				       $.ajax({
				       	type: 'POST',
				       	url: 'http://18.220.175.109/account/login',
				       	data: studentLogin,
				       	dataType: "JSON",
				       	success: function(){
				       		alert('sucessful login');
				       	},
				         error:function(status){
				         	alert('error '+ status.responseText);
				         }
				       });

                      });


                     /*forgotten password*/
                       
                       $('#para').click(function(e){
				       e.preventDefault()
				       
				       var password ={
				       	email:email.val(),
				       }

				       $.ajax({
				       	type: 'POST',
				       	url: 'http://18.220.175.109/account/recovery/password',
				       	data:password,
				       	dataType: "JSON",
				       	success: function(){
				       		alert('success');
				       	},
				       	error:function(status){
				       		alert('error ' + status.responseText);
				       	}
				       });

				   });

                     

				/*business login*/

					$('#bus').click(function(e){
				       e.preventDefault()


				       /*input your variable*/
				       
				       var email = $('#email');
				       var password = $('#password');
				       

				       var businessLogin = {
				       	
				       	email: email.val(),
				       	password: password.val(),
				       	
				       }

				       $.ajax({
				       	type: 'POST',
				       	url: 'http://18.220.175.109/account/login',
				       	data: businessLogin,
				       	dataType: "JSON",
				       	success: function(){
				       		alert('sucessful login');
				       	},
				         error:function(status){
				         	alert('error '+ status.responseText);
				         }
				       });

				      
					});











});