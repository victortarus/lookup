var user=require('../js/request-interface.js');
var apiKey =require('../.env').apiKey;

 function Request(){ //request object

}

  $.get('https://api.github.com/users/'+user+'?access_token=' + apiKey).then(function (response) {
       console.log(response);
       $(".Found").text("The User's name is:"+user);

  }).fail(function (error) {

      console.log("failed");
  });

 exports.requestModule=Request;
