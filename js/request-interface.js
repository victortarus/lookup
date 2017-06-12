var apiKey = require('./../.env').apiKey;
var Load = require('./../js/request.js').loadModule;
var Repos = require('./../js/request.js').reposModule;
// to search about users
$(document).ready(function() {
  $('#search').click(function() {
    var name = $('#username').val();
    $('#username').val("");
    var final = new Load();
    var c = final.loadUser(name);

  });
});
// this is to find the repo's name and its description
function displayRepos(repoName, repoDescription) {
  $('#repos').append("<li><h4>" + repoName + "</h4><br>" + repoDescription + "<br>");
}
$(document).ready(function() {
  $('#username').submit(function(event) {
    var gitrepos = new Repos();
    var gitname = new Load();
    var username = $('#username').val('');
    var rp = new repos();
    var f = rp.loadRepos(username, displayRepos);
    event.preventDefault();
  });
});
