
// start.js
// written by Ron Irwin June  © 2023.



$(document).ready(function() {

    // ***********  load header ****************************

        $.ajax({
            url : "templates/header.html",
            dataType: "text",
            success : function (data) {
                $("#header").html(data);
            }
        });//  end

    // ****************** load blog file list *************************
    $.ajax({
        url: "blogs/blog_list.csv",
        type: "GET",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'");
        },
        success: function(data) {
          // Process the response data
             processData(data);
        },
        error: function(xhr, status, error) {
          // Handle the error
          console.log('failed to load blog list file');
        }
      });// end
      
  
      // ************ read blog files and insert into grid ******************* 
    function processData(allText) {
      var allLines = allText.split(/\r\n|\n/);
      var gridContainer = $(".grid-container");
  
      for (var i = 0; i < allLines.length; i++) {

        var data = allLines[i].split(',');    

        var link = $('<a>').attr('href', data[0]).text(data[0]);//file.pdf   
        var title=data[3];
        var author=data[2];
        var datex=data[1];
        var lineitem='Date: '+datex+'  | Author: '+author+'  | Title: '+ title+' | -- '; 
        
        //var paragraph = $('<p>').text('Click here:').append(lineitem, link);
        var gridItem = $('<div>').addClass('grid-item').append(lineitem, link);

        $(".grid-container").append(gridItem);
      }
    };// end

    // ***************  load footer **********************
    $.ajax({
        url : "templates/footer.html",
        dataType: "text",
        success : function (data) {
            $("#footer").html(data);
        }
    }); // end 


const username = 'winir';
const password = '44081810';

async function loginToGitHub() {
  try {
    const response = await fetch('https://api.github.com/users', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
      }
    });

    if (response.status === 200) {
      const userData = await response.json();
      console.log('Login successful!');
      console.log('User data:', userData);
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  } catch (error) {
    console.log('An error occurred while logging in:', error);
  }
}

loginToGitHub();



  }); // end document ready

