var apiKey=require('./../env');
function User(){

}
User.prototype.userLookup = function (username,displayResults) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    displayResults(username,response.html_url,response.public_repos);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

};
User.prototype.userLookup=function(username,findRepo){
  $get('https://api.github.com/users/'+username+'/repos?access_token='+apiKey).then(function(response){
    console.log(response);
    findRepo(response);
  });
};
exports.requestmodule=User;
