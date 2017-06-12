var apiKey = require('./../.env').apiKey;

function git() {}

function displayInfo() {}

git.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    $("#showRepos").text(response.name); // take to back end
    event.preventDefault();
  }).fail(function(error) {

    console.log("errorrepo");
  });
};
// Display repos
displayInfo.prototype.getName = function(username, displayRepos) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i = 0; i < response.length + 1; i++) {
      if (response[i].description === null) {
        response[i].description = 'No description in repo';
      }
      displayRepos(response[i].name, response[i].d, response[i].created_at);
    }
  }).fail(function(error) {

    console.log("errorname");
  });


};
exports.reposModule = git;
exports.displayInfoModule = displayInfo;
