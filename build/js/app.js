(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey='1bb8d4aa9574c8eb1d573f2b167c9eebed8cbb1c';

},{}],2:[function(require,module,exports){
var Request=require('../js/request.js').requestModule;

//get user input from user


$(document).ready(function(){
  $("form#search").submit(function(){
    event.preventDefault();
    var user =$("#username").val();
    $('#username').val('');

  });
  });

},{"../js/request.js":3}],3:[function(require,module,exports){
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

},{"../.env":1,"../js/request-interface.js":2}],4:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"../js/request.js":3,"dup":2}]},{},[4]);
