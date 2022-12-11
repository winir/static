/** start.js */

//jquery ready
$(document).ready(function() {

	console.log('start ready')

  util.init();

	$(function(){	            
		  $("#main_menu").load("./templates/main_menu.html"); 
      $("#content").load("./templates/home.html"); 
      $("#footer").html(util.footer());
	  });
});

//navbar handler
$('.nav').on('click','a', function(e){    
  var id = $(this).attr("id");
    console.log(id); 
  if (id==="1") {$("#content").load("./templates/home.html");  }; //home
  if (id==="2") {$("#content").load("./templates/products.html");  }; //products
  if (id==="3") {$("#content").load("./templates/members.html");  }; //members
  if (id==="4") {$("#content").load("./templates/about.html");  }; //about
  if (id==="5") {$("#content").load("./templates/contact.html");  }; //contact
  if (id==="6") {$("#content").load("./templates/faq.html");  }; //FAQ       
});//end function
