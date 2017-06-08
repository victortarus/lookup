var apiKey=require('./../env');
function UserSearch(){

}
User.prototype.userLookup = function (username,displayResults) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    displayResults(username,response.html_url,response.public_repos);
  });
};
User.prototype.repoLookup=function(username,foundRepo){
  $get('https://api.github.com/users/'+username+'/repos?access_token='+apiKey).then(function(response){
    console.log(response);
    foundRepo(response);
  });
};
exports.requestmodule=UserSearch;
