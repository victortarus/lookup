var apiKey =require('../.env').apiKey;
//get user input from user


$(document).ready(function(){
  $("form#search").submit(function(){
    event.preventDefault()
    var UserName =$("#username").val();
    $('#username').val('');
    $.get('https://api.github.com/users/'+UserName+'?access_token=' + apiKey).then(function (response) {
         console.log(response);
         $('.searched').text('You have searched for '+ UserName+'.');

    }).fail(function (error) {
        $("#found").append(error.responseJSON.message);
    });

  });
  });
