
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
  
      for (var i = 0; i < allLines.length-1; i++) {

        var data = allLines[i].split(',');    

        var link = $("<a id='link'>").attr('href', data[0]).text("read-it-here.");//file.pdf   
        var title="<i id='title'>"+data[3]+"</i>";
        var author="<i id='author'>"+data[2]+"</i>";
        var datex=data[1];
        var lineitem='<b>Date:</b> '+datex+'  | <b>Author:</b> '+author+'  | <b>Title:</b> '+ title+' | '; 
        
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


  }); // end document ready

