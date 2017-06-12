var apiKey = require('./../.env').apiKey;

Load = function() {

};

Repos = function (){

};

Load.prototype.loadUser = function(name) {
  $.get('https://api.github.com/users/'+ name + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('#showdetails').append("<li>" + response.public_repos  +"</li>");

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};




Repos.prototype.loadRepos = function (name ,displayrepos){
$.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function (response) {
  for (var i = 0; i <= response.length ; i++) {
              if (response[i].description === null) {
                  response[i].description = 'No description in repo';
              } else {
                  displayRepos(response[i].name, response[i].description);
              }

          }
      }).fail(function (error) {
          console.log(error.responseJSON.message);
      });
  };
exports.reposModule= Repos;
exports.loadModule= Load;
