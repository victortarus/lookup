var apiKey =require('../.env').apiKey;
//get user input from user


$(document).ready(function(){
  $("form#search").submit(function(){
    event.preventDefault()
    var UserName =$("#username").val();
    $('#username').val('');
    $.get('https://api.github.com/users/'+UserName+'?access_token=' + apiKey).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            $(".searched").text("These are " + UserName + "s project ");
            $("#found").append("<li>You searched for " + response[i].name + "</li>")
        }
        // on fail the error will be displayed
    }).fail(function (error) {
        $("#founduser").append(error.responseJSON.message);
    });

  });
  });

// var user=require('./js/request-interface');
//
//  Request=function(){
//
// }
// Request.prototype.getRequest = function(UserName,displayFunction){
//   $.get('https://api.github.com/users/'+ UserName+'repos?access_token=' + apiKey+).then(function(response){
//     displayFunction(UserName);
//   }).fail(function(error){
//     $('.searched').text.(error.responseJSON.message);
//   });
// };
//  exports.requestModule=Request;
