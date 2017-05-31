var Request=require('../js/request.js').requestModule;

//get user input from user


$(document).ready(function(){
  $("form#search").submit(function(){
    event.preventDefault();
    var user =$("#username").val();
    $('#username').val('');

  });
  });
