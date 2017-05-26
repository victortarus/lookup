(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey='1bb8d4aa9574c8eb1d573f2b167c9eebed8cbb1c';

},{}],2:[function(require,module,exports){
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

},{"../.env":1}]},{},[2]);
