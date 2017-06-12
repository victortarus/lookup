(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey='1bb8d4aa9574c8eb1d573f2b167c9eebed8cbb1c';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/request.js":2}]},{},[3]);
