//get user input from user
$(document).ready(function(){
  $("form#search").submit(function(){
    var UserName =$("#username").val();
    $('#username').val('');
    $(".searched").text("this is your result"+UserName+ '.');
  })
  });
