var apiKey = require('./../.env').apiKey;
var git = require('./../js/request.js').reposModule;
var displayed = require('./../js/request.js').displayInfoModule;



$(document).ready(function() {
  $('#repoInfo').click(function() {
    var getRepoInfo = new git();
    var getdisplayed = new displayed();
    var username = $('#username').val();
    $('#username').val("");
    getRepoInfo.getRepos(username);
    getdisplayed.getName(username, displayRepos);
    event.preventDefault();
  });
  var displayRepos = function(repoName, repoDescription, $time) {
    $('#showName').append("<li><h4>" + repoName + "</h4><br>"
    + repoDescription + "<br> Date of creation: " + $time + "</li>");
  }
});
