//start.js

/* url of the api.php*/
url_api="api.php";

//****** logging ****/

var _data=[]; // hold returned data from DB
var _user=''; /// logged in user
var _logged_user={};
var _timestamp='';
//****** logging ****/



//jquery ready
$(document).ready(function() {

	console.log('start ready')

	$(function(){		
		$("#frame").load("templates/blog_form.html"); 
	  });
});

