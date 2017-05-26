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
       var repos=$(".repo").val();
       $('.repo').val();
       $.get('https://api.github.com/users/'+UserName+ '?access_token='+apiKey).then(function(response){

         for(var i=0;i<response.length+1;i++){
           if (response[i].description===null) {
             displayrepos(response[i].name,response[i].description.response.);
           }

         }.fail(function(error){
           $(".repo").append(error.responseJSON.message);
         })
       })
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
