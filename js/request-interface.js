var UserSearch =require('./js/request.js').requestmodule;

var displayResults=function(username,publicRepo){
  $('#found').show();
  $("#repo").text(foundRepo);
}

function displayResults(description){
  if(description ===null){
return"none found";
  }else
  {
      return description;
  }
}

$(document).ready(function(){
  $('#search').submit(function(event){
    currentUserSearch=new UserSearch();
    var username =$('#username').val();
    $('username').val();
    currentUserSearch.userLookup(username,displayResults)
    currentUserSearch.repoLookup(username,foundRepo);
  })
});
